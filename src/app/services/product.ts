import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productDataType } from '../data-type';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient, private router: Router) {}

  addProduct(data: productDataType): Observable<any> {
    console.log("URL Added ProductService File", data);
    return this.http.post('http://localhost:3000/products', data);
  } 
  
  productList(): Observable<any> {
    console.log("product list console.");
    return this.http.get<productDataType[]>('http://localhost:3000/products');
  }
  
  deleteProduct(id:string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  
  getProduct(id:string) {
    return this.http.get<productDataType>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product:productDataType) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }
}