import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { productDataType } from '../data-type';


@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-update-product.html',
  styleUrl: './seller-update-product.css'
})
export class SellerUpdateProduct implements OnInit {

  productData: undefined | productDataType
  constructor (private route: ActivatedRoute, private product: Product) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);

    productId && this.product.getProduct(productId).subscribe((data) =>{
      console.log(data); 
      this.productData=data;
    })
  }

  submitForm(data: any){
    
    if(this.productData){
      data.id =this.productData.id;
    }
    this.product.updateProduct(data).subscribe(()=>{})
    console.log(data);
  }

}
