import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../models/product.model';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass, DecimalPipe],
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent implements OnInit {
  #cartService = inject(CartService);
  destroyRef = inject(DestroyRef);
  cartProducts: CartProduct[] = [];
  totalPrice = 0;
  @Input({ required: true }) openModal = false;
  @Output() closedModal = new EventEmitter();

  ngOnInit(): void {
    const subscription = this.#cartService.cartState$.subscribe((products) => {
      this.cartProducts = products.products;
      this.totalPrice = products.totalPrice;
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  closeModal(): void {
    this.openModal = false;
    this.closedModal.emit();
  }
}
