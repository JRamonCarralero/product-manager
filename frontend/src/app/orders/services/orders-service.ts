import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../products/models/product-model';
import { OrderFilterParams } from "../models/order-models";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private productsAPI = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getFilteredProducts(filters: OrderFilterParams): Observable<ProductModel[]> {
    let params = new HttpParams();

    if (filters.provider) params = params.append('provider', filters.provider);
    if (filters.name) params = params.append('name', filters.name);

    return this.http.get<ProductModel[]>(`${this.productsAPI}/filters`, { params });
  }
}
