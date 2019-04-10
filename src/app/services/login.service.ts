import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from '../global/variables';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http: HttpClient ) { }

  login( data: any ) {
    return this._http.post(`${ URL_BACKEND }/login.php`, data );
  }

  isLogged() {
    return this._http.get(`${ URL_BACKEND }/login.php` );
  }

  logout() {
    return this._http.delete(`${ URL_BACKEND }/login.php` );
  }
}
