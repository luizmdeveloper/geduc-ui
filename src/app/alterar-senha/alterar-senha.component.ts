import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  private _Url: string;
  private msgs: Message[] = [];

  constructor(private _http: Http,
              private messageService: MessageService) { }

  enviar(login: string, senhaAtualInformada: string, novaSenha: string, confirmacaoSenha: string) {
    this.msgs = [];
    // senhaAtual: string = '';
    // msg: string;

    this._Url = `${environment.apiUrl}` + 'alterarSenha/' + login + '/' +
                Md5.hashStr(senhaAtualInformada).toString().toUpperCase() +
                Md5.hashStr(novaSenha).toString().toUpperCase();

    // FAZER GET PEGAR USUARIO SENHA ATUAL
    // COMO FAZER PARA ESSA TELA SABER O USUARIO CORRENTE

    // if (senhaAtualInformada !== senhaAtual) {
    //    msg += '- Senha atual diferente da cadastrada';
    // }else if (novaSenha !== confirmacaoSenha) {
    //   msg += '- Nova senha e confirmação de senha diferentes';
    // }
  }

}
