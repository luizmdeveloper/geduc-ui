import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private nomeUsuario: string;

  constructor(private router: Router,
              private loginService: LoginService) {}

  ngOnInit() {
    this.nomeUsuario = this.loginService.getNomeUsuario();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
