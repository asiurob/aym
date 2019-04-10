import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  name: string;
  role: string;
  constructor(
    public _session: SessionService
  ) { }

  ngOnInit() {
    const user = this._session.getLogin();
    this.name  = user.name;
    this.role  = user.role;
  }

  salir() {
    this._session.deleteLogin();
  }

}
