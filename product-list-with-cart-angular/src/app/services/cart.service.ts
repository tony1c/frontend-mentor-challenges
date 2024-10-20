import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct, CartState, Product } from '../models/product.model';
import { initialCartState } from './cart-state';

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

  resetCartState(): void {
    // this.cartState$.next({ ...emptyCartState });
    const emptyState: CartState = {
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
    };

    this.cartState$.next(emptyState);
  }

  isProductInCart(product: Product): boolean {
    const currentState = this.cartState$.getValue();
    return currentState.products.some(
      (cartProd) => cartProd.name === product.name,
    );
  }

  incrementQuantity(product: Product): void {
    const currentState = this.cartState$.getValue();
    const prod = currentState.products.find(
      (prod) => prod.name === product.name,
    );

    if (prod) {
      prod.quantity++;
      prod.productsPrice = prod.quantity * prod.price;
      this.updateCartState(currentState);
    }
  }

  decrementQuantity(product: Product): void {
    const currentState = this.cartState$.getValue();
    const prod = currentState.products.find(
      (prod) => prod.name === product.name,
    );

    if (prod && prod.quantity > 1) {
      prod.quantity--;
      prod.productsPrice = prod.quantity * prod.price;
      this.updateCartState(currentState);
    } else {
      this.removeProduct(product);
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
