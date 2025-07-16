import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'seller-auth',
        component: SellerAuth 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        Home,
        HttpClientModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }