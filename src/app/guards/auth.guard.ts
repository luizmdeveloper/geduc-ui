import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private usuarioAutenticado: boolean;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.usuarioAutenticado = false;
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.verificarUsuario();
  }

  verificarUsuario(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
