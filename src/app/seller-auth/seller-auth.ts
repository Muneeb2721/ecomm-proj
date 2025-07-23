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

  constructor(private seller: Seller, private router: Router) {}
  
  showLogin = false;
  authError: string = '';

  ngOnInit(): void {
    this.seller.reloadSeller(); 
  } 
  

  signUp(data: SignUp): void {
    console.log("Seller Service Call", data);
    // this.seller.userSignUp(data)
  }

  login(data: any): void {
    console.log("Data from login function", data);
    this.seller.userLogin(data).subscribe((result: any) => {
        console.log(result);
        if( result && result.body && result.body.length) {
          console.log("Login successful", result.body);
          this.seller.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        } else {
          alert('Please enter valid details');
        }
      });;
  }

  openLogin(): void {
    this.showLogin = true;
    console.log('Login view:', this.showLogin);
  }

  openSignUp(): void {
    this.showLogin = false;
  }
}