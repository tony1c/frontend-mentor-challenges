import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>('/assets/data.json');
  }
}
