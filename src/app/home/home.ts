import { Component, OnInit } from '@angular/core';
import { productDataType } from '../data-type';
import { Product } from '../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule]
})

export class Home implements OnInit {
 popularProducts: productDataType[] | undefined;
  constructor(private product:Product) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((result) => {
      this.popularProducts = result;
      console.log("gdddddddddddddd", this.popularProducts)
    });
  }
}