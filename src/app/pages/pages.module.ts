import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ClientesComponent } from './crm/clientes/clientes.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EmpresasComponent } from './crm/empresas/empresas.component';
import { RrhhComponent } from './crm/rrhh/rrhh.component';

@NgModule({
  declarations: [
    PagesComponent,
    ClientesComponent,
    EmpresasComponent,
    RrhhComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
