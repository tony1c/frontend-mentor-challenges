import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CartProduct, Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, DecimalPipe],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent implements OnInit {
  #cartService = inject(CartService);
  destroyRef = inject(DestroyRef);
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
}
