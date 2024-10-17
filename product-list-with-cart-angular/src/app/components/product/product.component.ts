import { Component } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AddToCartComponent],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {}
