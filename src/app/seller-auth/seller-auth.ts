import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth implements OnInit {

  constructor(private seller: Seller) {}

  ngOnInit(): void {}

  signUp(data:object):void{
    console.warn("Seller Service Call");
    this.seller.userSignUp();
  } 
}