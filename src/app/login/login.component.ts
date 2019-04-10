import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  err = false;
  err_text: string;
  err_message: string;
  err_code: number;

  constructor( public _login: LoginService,
               private _session: SessionService,
               private _router: Router ) { }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormControl('', Validators.required ),
      password: new FormControl( '', Validators.required )
    });
  }

  login() {
    if ( this.form.valid ) {
      this._login.login( this.form.value )
      .subscribe(
        ( res: any ) =>  {
          this.err = false;
          this._session.setLogin( res.data );
          this._router.navigate(['/']);
        },
        ( err: any ) => {
          this.err         = true;
          this.err_text    = err.statusText;
          this.err_code    = err.status;
          this.err_message = err.error.message;
        }
      );
    }
  }
}
