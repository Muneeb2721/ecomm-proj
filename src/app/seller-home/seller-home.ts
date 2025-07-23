import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Product } from '../services/product';
import { productDataType } from '../data-type';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-seller-home',
  imports: [CommonModule],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css'
})
export class SellerHome implements OnInit {
  showProductList: productDataType[] =[];
  deleteProductMessage: undefined | string;

  constructor(private product: Product,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    console.log('ddddddddddddddddddddd', this.platformId);
    if (isPlatformBrowser(this.platformId)) {
    this.List();
    }
  }
  deleteProduct(id: string) {
    console.log("testing Id: ", id);

    this.product.deleteProductList(id).subscribe((result) => {
      if (result) {
        this.deleteProductMessage = 'Product Deleted';
        this.List();
      }
    });

    setTimeout(() => {
      this.deleteProductMessage = undefined;
    }, 3000);
  }

  List() {
    this.product.productList().subscribe(
      (result) => {
        this.showProductList = result;

        console.log("List Functionssssssssssssss",this.showProductList);
      }
    )
  }
}