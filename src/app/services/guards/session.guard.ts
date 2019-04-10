import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private _login: LoginService,
               private _router: Router,
               private _session: SessionService) {}

  canActivate(): Observable<boolean> | boolean {

    return this._login.isLogged().pipe( map( (data: any) => {
      if( data.data.logged ){
        return true;
      } else {
        this._session.deleteLogin();
        this._router.navigate(['/login']);
        return false;
      }
    })
    )
  }
}
