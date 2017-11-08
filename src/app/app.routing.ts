import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EsquecerSenhaComponent } from './esquecer-senha/esquecer-senha.component';
import { BoletimComponent } from './boletim/boletim.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'boletim', pathMatch: 'full' },
  { path: 'login', component : LoginComponent },
  { path: 'esquecer', component : EsquecerSenhaComponent },
  { path: 'boletim', component : BoletimComponent, canActivate : [AuthGuard] },
  { path: 'alterar', component : AlterarSenhaComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
