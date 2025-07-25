import { Component, OnInit } from '@angular/core';
import { productDataType} from '../data-type';
import { Product } from '../services/product';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.html',
  styleUrls: ['./seller-home.css'],
  imports: [CommonModule]
})
export class SellerHome implements OnInit {
  productList: productDataType[] = []; 
  productMessage: string = '';
  
  constructor(private product: Product, private route: Router) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: string) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }

  sellerUpdateProduct(id: string) {
  this.route.navigate(['/seller-update-product', id]);
  }

}