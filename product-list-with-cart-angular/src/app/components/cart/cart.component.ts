import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { CartProduct, Product } from '../../models/product.model';
import { CartService } from '../../services/ cart/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DecimalPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, DecimalPipe, ModalComponent],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent implements OnInit {
  #cartService = inject(CartService);
  destroyRef = inject(DestroyRef);
  @Output() orderConfirmed = new EventEmitter<void>();
  cartProducts: CartProduct[] = [];
  totalPrice = 0;
  totalQuantity = 0;

  ngOnInit(): void {
    const subscription = this.#cartService.cartState$.subscribe((products) => {
      this.cartProducts = products.products;
      this.totalPrice = products.totalPrice;
      this.totalQuantity = products.totalQuantity;
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onRemoveProduct(product: Product): void {
    this.#cartService.removeProduct(product);
  }

  onOrderConfirmed(): void {
    this.orderConfirmed.emit();
  }
}
