import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct, CartState, Product } from '../models/product.model';
import { initialCartState } from './initial-cart-state-data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartState$ = new BehaviorSubject<CartState>(initialCartState);

  addProduct(product: Product) {
    const currentState = this.cartState$.getValue();
    const existingProduct = currentState.products.find(
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
      currentState.products.push(newProduct);
    }

    this.updateCartState(currentState);
  }

  removeProduct(product: Product): void {
    const currentState = this.cartState$.getValue();
    const updatedProducts = currentState.products.filter(
      (cartProd) => cartProd.name !== product.name,
    );

    if (updatedProducts.length !== currentState.products.length) {
      currentState.products = updatedProducts;
      this.updateCartState(currentState);
    }
  }

  private updateCartState(state: CartState): void {
    state.totalPrice = state.products.reduce(
      (acc, prod) => acc + prod.productsPrice,
      0,
    );
    state.totalQuantity = state.products.reduce(
      (acc, prod) => acc + prod.quantity,
      0,
    );

    this.cartState$.next({ ...state });
  }

  private updateProduct(product: CartProduct): void {
    product.quantity++;
    product.productsPrice = product.quantity * product.price;
  }
}

// private cartProducts: CartProduct[] = [];
// private totalPrice = 0;
// private totalQuantity = 0;

// get cart(): CartProduct[] {
//   return this.cartProducts;
// }

// addProduct(product: Product) {
//   const existingProduct = this.cartProducts.find(
//     (prod) => prod.name === product.name,
//   );
//   if (existingProduct) {
//     this.updateProduct(existingProduct);
//   } else {
//     const newProduct: CartProduct = {
//       ...product,
//       id: crypto.randomUUID(),
//       quantity: 1,
//       productsPrice: product.price,
//     };
//     this.cartProducts.push(newProduct);
//     console.log(this.cartProducts);
//   }
//   this.updateTotalPrice();
//   this.updateTotalQuantity();
//   console.log(this.totalPrice);
//   console.log(this.totalQuantity);
// }

// getTotalPrice(): number {
//   return this.totalPrice;
// }

// getTotalQuantity(): number {
//   return this.totalQuantity;
// }

// private updateTotalPrice(): void {
//   this.totalPrice = this.cartProducts.reduce((acc, currProd) => {
//     return acc + currProd.productsPrice;
//   }, 0);
// }

// private updateTotalQuantity(): void {
//   this.totalQuantity = this.cartProducts.reduce((acc, currProd) => {
//     return acc + currProd.quantity;
//   }, 0);
// }

// private updateProduct(product: CartProduct): void {
//   product.quantity++;
//   product.productsPrice = product.quantity * product.price;
// }
