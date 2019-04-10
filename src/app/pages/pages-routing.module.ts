import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SessionGuard } from '../services/guards/session.guard';
import { ClientesComponent } from './crm/clientes/clientes.component';
import { EmpresasComponent } from './crm/empresas/empresas.component';
import { RrhhComponent } from './crm/rrhh/rrhh.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SessionGuard],
    component: PagesComponent,
    children: [
        { path: 'crm/clientes', component: ClientesComponent },
        { path: 'crm/empresas', component: EmpresasComponent },
        { path: 'crm/rrhh', component: RrhhComponent }
    ]
  },
  { path: 'crm', redirectTo: '/crm/clientes', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
