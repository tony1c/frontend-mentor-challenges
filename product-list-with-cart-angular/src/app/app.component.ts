import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductComponent } from './components/product-list/product/product.component';
import productsData from '../../public/assets/data.json';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductComponent,
    ProductListComponent,
    CartComponent,
    ModalComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'product-list-with-cart-angular';
  products: Product[] = productsData;
  isModalVisible = false;

  ngOnInit(): void {
    console.log(this.products);
  }

  openModal(): void {
    this.isModalVisible = true;
  }

  onClosedModal(): void {
    this.isModalVisible = false;
  }
}
