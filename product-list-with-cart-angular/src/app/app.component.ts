import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductComponent } from './components/product/product.component';
import productsData from '../../public/assets/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'product-list-with-cart-angular';
  products: Product[] = productsData;

  ngOnInit(): void {
    console.log(this.products);
  }
}
