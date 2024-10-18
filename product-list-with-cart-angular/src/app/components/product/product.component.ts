import { Component, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddToCartComponent, CurrencyPipe],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
}
