import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct, Product } from '../../models/product.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent implements OnInit {
  #cartService = inject(CartService);
  destroyRef = inject(DestroyRef);

  cartProducts: CartProduct[] = [];
  cartProduct?: CartProduct | undefined;

  @Input({ required: true }) product!: Product;

  ngOnInit(): void {
    const subscription = this.#cartService.cartState$.subscribe((state) => {
      this.cartProducts = state.products;

      this.cartProduct = this.cartProducts.find(
        (cartProd) => cartProd.name === this.product.name,
      );
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  isProductInCart(): boolean {
    return this.#cartService.isProductInCart(this.product);
  }

  addToCart(): void {
    if (!this.isProductInCart()) {
      this.#cartService.addProduct(this.product);
    }
  }
}
