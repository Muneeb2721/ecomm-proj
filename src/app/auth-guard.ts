import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Seller } from './services/seller';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private seller: Seller) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    return this.seller.isSellerLoggedIn.getValue();
  }
}
