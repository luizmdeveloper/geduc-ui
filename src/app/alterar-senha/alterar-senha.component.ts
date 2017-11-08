import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginService } from '../login/login.service';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

export class Usuario {
  cpf: string;
  senhaAtual: string;
  novaSenha: string;
  confirmacaoSenha: string;
}

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  _Url: string;
  msgs: Message[] = [];
  cpf: string;
  atual: string;
  usuario: Usuario = new Usuario();

  constructor(private _http: Http,
              private messageService: MessageService,
              private loginService: LoginService,
              private title: Title) {
   this.title.setTitle('Geduc - alterar senha');
  }

  ngOnInit() {
    this.usuario.cpf              = this.loginService.getCpf();
    this.usuario.senhaAtual       = '';
    this.usuario.novaSenha        = '';
    this.usuario.confirmacaoSenha = '';
    this.cpf                      = this.loginService.getCpf();
    this.atual                    = this.loginService.getSenhaMd5();
  }

  salvar(form: FormControl) {
    this.msgs = [];

    if (this.usuario.cpf === '') {
      this.msgs.push({severity: 'error', detail: '- Login não informado'});
    }else if (this.usuario.cpf !== this.cpf) {
      this.msgs.push({severity: 'error', detail: '- Login informado diferente login cadastrado'});
    }

    if (this.usuario.senhaAtual === '') {
      this.msgs.push({severity: 'error', detail: '- Senha atual não informado'});
    }else if (Md5.hashStr(this.usuario.senhaAtual).toString().toUpperCase() !== this.atual) {
      this.msgs.push({severity: 'error', detail: '- Senha atual diferente da senha já cadastrada'});
    }

    if (this.usuario.novaSenha === '') {
      this.msgs.push({severity: 'error', detail: '- Nova senha não informada'});
    }

    if (this.usuario.confirmacaoSenha === '') {
      this.msgs.push({severity: 'error', detail: '- Confirmação de senha não informada'});
    }

    if (this.msgs.length === 0) {
      if (this.usuario.novaSenha !== this.usuario.confirmacaoSenha) {
        this.msgs.push({severity: 'error', detail: '- Nova senha e confirmação de senha diferentes'});
      }
    }

    if (this.msgs.length === 0) {
      this._Url = `${environment.apiUrl}` + 'alterarSenha/' + this.usuario.cpf + '/' +
                  Md5.hashStr(this.usuario.senhaAtual).toString().toUpperCase() + '/' +
                  Md5.hashStr(this.usuario.novaSenha).toString().toUpperCase();

      this._http.get(this._Url)
               .toPromise()
               .then(response => {
                  if (response.json().result[0].alterar_senha) {
                    this.msgs.push({severity: 'success', detail: 'Sua senha foi alterada com sucesso'});
                  }else {
                    this.msgs.push({severity: 'error', detail: 'Ops! ocorreu um erro ao alterar sua senha, aguarde e tente mais tarde novamente'});
                  }
                })
                .catch(err => {
                  this.msgs.push({severity: 'error', detail: err.json().error});
                });
    }
  }
}
