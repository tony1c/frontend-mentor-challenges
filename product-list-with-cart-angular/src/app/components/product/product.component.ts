import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductButtonComponent } from './product-button/product-button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass,
    ProductButtonComponent,
    ProductButtonComponent,
  ],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  #cartService = inject(CartService);
  @Input({ required: true }) product!: Product;

  addProduct(product: Product): void {
    this.#cartService.addProduct(product);
  }

  isProductInCart(): boolean {
    return this.#cartService.isProductInCart(this.product);
  }
}
