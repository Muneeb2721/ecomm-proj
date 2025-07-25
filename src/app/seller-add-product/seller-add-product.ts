import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { productDataType } from '../data-type';
import { response } from 'express';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrls: ['./seller-add-product.css']
})
export class SellerAddProduct implements OnInit {
  
  constructor(private product: Product) {}

  ngOnInit(): void {}

  submitForm(data: productDataType) {
    console.log('SellerAddProduct File:', data)
    
    this.product.addProduct(data).subscribe((res: any)=>{});
}
}