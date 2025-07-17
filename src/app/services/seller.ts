import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  constructor(private _http: HttpClient){}
  userSignUp(data: any): Observable<any>{
    return this._http.post<any>('http://localhost:3001/seller',data,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
