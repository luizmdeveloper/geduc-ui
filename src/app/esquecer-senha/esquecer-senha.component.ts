import { EmailValidator } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-esquecer-senha',
  templateUrl: './esquecer-senha.component.html',
  styleUrls: ['./esquecer-senha.component.css']
})
export class EsquecerSenhaComponent {
  private _Url: String;

  constructor(private msgs: MessageService) {}

  enviar(email: string) {
    this._Url = `${environment.apiUrl}` + 'recuperarSenha/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/';
    this._Url = this._Url + email;

  }

}
