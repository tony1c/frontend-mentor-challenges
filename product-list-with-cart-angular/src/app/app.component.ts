import { Component, inject, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'product-list-with-cart-angular';
  productsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((product: Product[]) => {
      this.products = product;
      console.log(this.products);
    });
  }
}
