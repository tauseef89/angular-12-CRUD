import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ProductService {

  apiUrl = 'http://localhost:3000/products'

  constructor(private http: HttpClient) {}

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  create(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, data)
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
  
}