import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginService } from '../login/login.service';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  private _Url: string;
  private msgs: Message[] = [];
  private cpf: string;
  private atual: string;

  constructor(private _http: Http,
              private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.cpf = this.loginService.getCpf();
    this.atual = this.loginService.getSenhaMd5();
  }

  enviar(login: string, senhaAtualInformada: string, novaSenha: string, confirmacaoSenha: string) {
    this.msgs = [];

    this._Url = `${environment.apiUrl}` + 'alterarSenha/' + login + '/' +
                Md5.hashStr(senhaAtualInformada).toString().toUpperCase() +
                Md5.hashStr(novaSenha).toString().toUpperCase();

    if (login !== this.cpf) {
      this.msgs.push({severity: 'error', detail: 'Login informado diferente do seu login'});
    }

    if (Md5.hashStr(senhaAtualInformada).toString().toUpperCase() !== this.atual) {
      this.msgs.push({severity: 'error', detail: 'Senha atual diferente da senha já cadastrada'});
    }

    if (novaSenha === '') {
      this.msgs.push({severity: 'error', detail: 'Nova senha não informada'});
    }

    if (confirmacaoSenha === '') {
      this.msgs.push({severity: 'error', detail: 'Confirmação de senha não informada'});
    }

    if (this.msgs === []) {
      if (novaSenha !== confirmacaoSenha) {
        this.msgs.push({severity: 'error', detail: 'Nova senha e confirmação de senha diferentes'});
      }
    }

    if (this.msgs === []) {
      console.log('implementar a chamada ao servidor');
    }
  }
}
