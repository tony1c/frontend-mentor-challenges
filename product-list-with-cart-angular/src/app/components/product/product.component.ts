import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, CurrencyPipe],
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
