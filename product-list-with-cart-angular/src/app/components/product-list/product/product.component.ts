import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../../../services/ cart/cart.service';
import { ProductButtonComponent } from './product-button/product-button.component';
import { ImageType, Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, NgClass, ProductButtonComponent],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent implements OnInit {
  #cartService = inject(CartService);
  #productService = inject(ProductService);
  destroyRef = inject(DestroyRef);

  @Input({ required: true }) product!: Product;

  currentImageType: ImageType = 'mobile';

  ngOnInit(): void {
    const subscription = this.#productService
      .getCurrentBreakpoint()
      .subscribe((breakpoint) => {
        this.currentImageType = breakpoint;
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  addProduct(product: Product): void {
    this.#cartService.addProduct(product);
  }

  isProductInCart(): boolean {
    return this.#cartService.isProductInCart(this.product);
  }

  getProductImage(product: Product): string {
    return this.#productService.getProductImage(product, this.currentImageType);
  }
}
