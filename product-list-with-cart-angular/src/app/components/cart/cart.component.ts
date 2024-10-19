import { Component, inject } from '@angular/core';
import { CartProduct } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent {
  #cartService = inject(CartService);
  cartProducts: CartProduct[] = this.#cartService.cart;
}
