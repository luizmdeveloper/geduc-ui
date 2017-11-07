import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeUsuario: string;
  exibindoMenu: boolean;

  constructor(private router: Router,
              private loginService: LoginService) {
    this.exibindoMenu = false;
  }

  ngOnInit() {
    this.nomeUsuario = this.loginService.getNomeUsuario();
  }

  logout() {
    this.router.navigate(['/']);
  }
}
