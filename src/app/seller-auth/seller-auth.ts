import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Seller } from '../services/seller';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})

export class SellerAuth implements OnInit {

  constructor(private seller: Seller, private router: Router) { 
    // This constructor initializes the Seller service and Router for navigation.
  }
  
  ngOnInit(): void {
    this.seller.reloadSeller();
  } 

  signUp(data: SignUp): void {
    console.log("Seller Service Call", data);
    this.seller.userSignUp(data)
  }
} 