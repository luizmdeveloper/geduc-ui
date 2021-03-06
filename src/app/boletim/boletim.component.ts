import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Message } from 'primeng/components/common/api';
import { Title } from '@angular/platform-browser';

import { LoginService } from '../login/login.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  parametro: any;
  alunos: any[];
  aluno: any;
  msgs: Message[] = [];
  responsavel: string;
  styleBoletim: string = 'col-red';

  constructor(private http: Http,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private title: Title) {
   this.title.setTitle('Geduc - boletim');
  }

  ngOnInit() {
    this.parametro   = this.loginService.getParametro();
    this.alunos      = this.loginService.getAlunos();
    this.responsavel = this.loginService.getNomeUsuario();
  }

  imprimirBoletim(aluno: any) {
    this.aluno = aluno;
    let url    = `${environment.apiUrl}` + 'imprimirBoletim/' + `${environment.empresa}` + '/' + `${environment.empresa}` + '/' + 2017 + '/' + aluno.matricula;

    this.http.get(url)
    .toPromise()
    .then(response => {
      let result = response.json().result[0];

      if (result) {
        if (result.imprimir) {
          window.open('../../geduc/assets/boletim/' + this.aluno.matricula + '.PDF', '_blank')
        }
      }
      else {
        this.msgs.push({severity: 'error', summary: 'Erro ao imprimir boletim'});
      }
    })
    .catch(err => this.msgs.push({severity: 'error',  summary: 'Erro ao imprimir boletim <br/>', detail: err}));
  }
}
