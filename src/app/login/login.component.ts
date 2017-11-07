import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginService } from './login.service';

import { environment } from './../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msgs: Message[] = [];

  constructor(private _http: Http,
              private messageService: MessageService,
              private router: Router,
              private loginService: LoginService,
              private title: Title) {
    this.title.setTitle('Geduc - login');
  }

  logar(login: string, senha: string) {
    this.loginService.login(login, senha)
      .then( dados => {
        if (JSON.stringify(dados) === '{}') {
          this.msgs.push({severity: 'error', detail: 'Usário e ou senha incorretos'});
        } else {
          this.router.navigate(['/boletim']);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}
