import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { SellerHome } from './seller-home/seller-home';
import { AuthGuard } from './auth-guard';
import { SellerAddProduct } from './seller-add-product/seller-add-product';


export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'seller-auth',
        component: SellerAuth 
    }
    ,
    {
        component: SellerHome,
        path: 'seller-home',
        // canActivate: [AuthGuard]
    }
    ,
    { 
        component: SellerAddProduct,
        path: 'seller-add-product',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        Home,
    ],
    exports: [RouterModule],
    providers: [NgZone]
})

export class AppRoutingModule {}