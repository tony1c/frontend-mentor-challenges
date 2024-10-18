import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListComponent {
  @Input({ required: true }) products!: Product[];
}
