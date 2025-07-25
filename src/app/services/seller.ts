import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class Seller {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data:SignUp){
    this.http
    .post('http://localhost:3000/seller', data, { observe: 'response' })
    .subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['/seller-home']);
    });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }
  
  userLogin(data: Login) {
    return this.http
      .get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, 
        { observe: 'response' })
  }

}