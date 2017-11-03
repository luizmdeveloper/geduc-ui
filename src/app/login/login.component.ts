import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';

import { ToastyService } from 'ng2-toasty';

import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

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
  private data: any = null;

  constructor(private _http: Http) {}

  logar(login: string, senha: string) {
    this._Url = `${environment.apiUrl}` + 'getUsuario/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/';

    this._Url = this._Url + login + '/' + Md5.hashStr(senha);

    return this._http.get(this._Url)
            .map((res: Response) => res.json())
            .subscribe(data => {
                this.data = data;
                if (this.data.empty) {
                  // this.toasty.error('usuário ou senha inválido');
                }
            });
  }

}
