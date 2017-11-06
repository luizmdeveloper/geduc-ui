import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-esquecer-senha',
  templateUrl: './esquecer-senha.component.html',
  styleUrls: ['./esquecer-senha.component.css']
})
export class EsquecerSenhaComponent {
  private _Url: string;
  private msgs: Message[] = [];

  constructor(private _http: Http,
              private messageService: MessageService) {}

  enviar(email: string): Promise<any> {
    this.msgs = [];
    this._Url = `${environment.apiUrl}` + 'recuperarSenha/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/';
    this._Url = this._Url + email;

    return this._http.get(this._Url)
          .toPromise()
          .then(response => {
            if (response.json().result[0].recuperar_senha) {
              this.msgs.push({severity: 'success', detail: 'Para continuar, acesse seu email:' + response.json().result[0].email + '. Verifique se foi enviando um e-mail com uma nova senha'});
            }else{
              this.msgs.push({severity: 'error', detail: 'Login não encontrado'});
            }
          })
          .catch(err => {
            this.msgs.push({severity: 'error', detail: err.json().error});
          });
  }

}
