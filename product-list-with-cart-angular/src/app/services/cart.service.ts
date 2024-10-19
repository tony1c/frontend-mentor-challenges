import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: CartProduct[] = [];

  addProduct(product: Product) {
    const existingProduct = this.cartProducts.find(
      (prod) => prod.product.name === product.name,
    );
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct: CartProduct = {
        product,
        id: crypto.randomUUID(),
        quantity: 1,
      };
      this.cartProducts.push(newProduct);
      console.log(this.cartProducts);
    }
  }
}
