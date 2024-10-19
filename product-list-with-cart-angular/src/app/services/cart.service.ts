import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: CartProduct[] = [];
  private totalPrice = 0;
  private totalQuantity = 0;

  get cart(): CartProduct[] {
    return this.cartProducts;
  }

  addProduct(product: Product) {
    const existingProduct = this.cartProducts.find(
      (prod) => prod.name === product.name,
    );
    if (existingProduct) {
      this.updateProduct(existingProduct);
    } else {
      const newProduct: CartProduct = {
        ...product,
        id: crypto.randomUUID(),
        quantity: 1,
        productsPrice: product.price,
      };
      this.cartProducts.push(newProduct);
      console.log(this.cartProducts);
    }
    this.updateTotalPrice();
    this.updateTotalQuantity();
    console.log(this.totalPrice);
    console.log(this.totalQuantity);
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  private updateTotalPrice(): void {
    this.totalPrice = this.cartProducts.reduce((acc, currProd) => {
      return acc + currProd.productsPrice;
    }, 0);
  }

  private updateTotalQuantity(): void {
    this.totalQuantity = this.cartProducts.reduce((acc, currProd) => {
      return acc + currProd.quantity;
    }, 0);
  }

  private updateProduct(product: CartProduct): void {
    product.quantity++;
    product.productsPrice = product.quantity * product.price;
  }
}
