import { Component, OnInit } from '@angular/core';

export class Parametro {
  ano: number;
  boletim_liberado: boolean;
}

export class Aluno {
  matricula: number;
  nome: string;
}

export class Boletim {
  parametro: Parametro;
  codigo: number;
  nome: string;
  alunos: Array<Aluno>;
}

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  matriculaImprimir = 0;
  imprimir = true;

  alunos: Aluno[];
  aluno: Aluno;

  ngOnInit() {
    this.alunos = [{matricula: 87557, nome: 'ANTONIO PAULO DA COSTA VALE'}];
  }

  imprimirBoletim(aluno: Aluno) {
    this.aluno = aluno;
    console.log(this.aluno);
  }

}
