import { Injectable } from '@angular/core';
import { LoggedUser } from '../interfaces/logged-user-interface';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor( private _login: LoginService,
              private _router: Router ) { }

  setLogin( user: LoggedUser ) {
    localStorage.setItem( 'user', user.uid );
    localStorage.setItem( 'job',  user.job );
    localStorage.setItem( 'role',  user.role );
    localStorage.setItem( 'name', user.name );
    localStorage.setItem( 'photo', user.photo );
  }

  getLogin(): LoggedUser {
    const arr: any = {};
    arr.user  = localStorage.getItem( 'user' );
    arr.job   = localStorage.getItem( 'job' );
    arr.role  = localStorage.getItem( 'role' );
    arr.name  = localStorage.getItem( 'name' );
    arr.photo = localStorage.getItem( 'photo' );
    return arr;
  }

  deleteLogin() {
    this._login.logout().subscribe(
      () => {
        localStorage.removeItem( 'user' );
        localStorage.removeItem( 'job' );
        localStorage.removeItem( 'role' );
        localStorage.removeItem( 'name' );
        localStorage.removeItem( 'photo' );
        this._router.navigate(['/login']);
    });
  }
}
