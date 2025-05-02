// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  searchProducts(name: string, location: string): Observable<Product[]> {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (location) params = params.set('location', location);
    return this.http.get<Product[]>(this.baseUrl, { params });
  }
}
