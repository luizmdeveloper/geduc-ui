import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private _Url = `${environment.apiUrl}` + 'getUsuario/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/';
  private parametro;
  private usuarioAutenticado: boolean;
  private nomeUsuario: string;
  private senhaMd5: string;
  private cpf: string;
  private alunos = [];

  constructor(private _http: Http) {
    this.usuarioAutenticado = false;
  }

  login(login: string, senha: string): Promise<any> {

    this._Url = this._Url + login + '/' + Md5.hashStr(senha).toString().toUpperCase();

    return this._http.get(this._Url)
            .toPromise()
            .then(response => {
              this.usuarioAutenticado = true;
              this.parametro          = response.json().result[0].parametro;
              this.nomeUsuario        = response.json().result[0].nome;
              this.senhaMd5           = response.json().result[0].senha;
              this.cpf                = response.json().result[0].login;
              this.alunos             = response.json().result[0].alunos;
              return response.json().result[0];
            });
  }

  isAuthenticated(): boolean {
    return this.usuarioAutenticado;
  }

  getNomeUsuario(): string {
    return this.nomeUsuario;
  }

  getSenhaMd5(): string {
    return this.senhaMd5;
  }

  getCpf(): string {
    return this.cpf;
  }

  getAlunos(): any[] {
    return this.alunos;
  }

  getParametro(): any {
    return this.parametro;
  }

}
