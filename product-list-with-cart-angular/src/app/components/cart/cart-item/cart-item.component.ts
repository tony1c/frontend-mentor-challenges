import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct, Product } from '../../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './cart-item.component.html',
  styles: ``,
})
export class CartItemComponent {
  @Input({ required: true }) product!: CartProduct;
  @Output() productRemoved = new EventEmitter<Product>();

  removeProduct(product: Product) {
    this.productRemoved.emit(product);
  }
}
