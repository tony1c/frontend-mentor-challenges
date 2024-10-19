import { Component, inject, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddToCartComponent, CurrencyPipe],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  #cartService = inject(CartService);
  @Input({ required: true }) product!: Product;

  addProduct(product: Product): void {
    this.#cartService.addProduct(product);
  }
}
