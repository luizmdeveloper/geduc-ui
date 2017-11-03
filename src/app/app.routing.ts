import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EsquecerSenhaComponent } from './esquecer-senha/esquecer-senha.component';
import { BoletimComponent } from './boletim/boletim.component';

const APP_ROUTES: Routes = [
  { path: '', component : BoletimComponent },
  { path: 'login', component : LoginComponent },
  { path: 'esquecer', component : EsquecerSenhaComponent },
  { path: 'boletim', component : BoletimComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
