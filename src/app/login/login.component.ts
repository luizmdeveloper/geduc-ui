import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { environment } from './../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/toPromise';

export class Parametro {
  codigo: number;
  boleteim_impresso: boolean;
}

export class Aluno {
  matricula: number;
  nome: string;
}

export class Boletim {
  parametro: Parametro;
  codigo: number;
  nome: string;
  alunos: Aluno[];
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private _Url: string;
  private msgs: Message[] = [];

  constructor(private _http: Http,
              private messageService: MessageService,
              private router: Router) {
  }

  logar(login: string, senha: string): Promise<any> {
    this._Url = `${environment.apiUrl}` + 'getUsuario/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/';

    this._Url = this._Url + login + '/' + Md5.hashStr(senha).toString().toUpperCase();

    return this._http.get(this._Url)
          .toPromise()
          .then(response => {
            if (response.json().result[0]) {
              this.router.navigate(['/boletim']);
            }else {
              this.msgs.push({severity: 'error', detail: 'Usário e ou senha incorretos'});
            }
          })
          .catch(err => console.log(err));
  }

}
