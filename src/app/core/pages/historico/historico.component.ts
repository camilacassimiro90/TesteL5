import { Component, OnInit } from '@angular/core';

export interface IHistorico {
  inputTexto: string;
  selectTipo: string;
}


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  itens: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
