import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { RefreshService } from 'src/app/shared/services/refresh.service';

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

  constructor(
    private storageService: LocalStorageService,
    private refreshService: RefreshService
  ) { }

  ngOnInit(): void {
    this.getItens();
    this.refreshService.getRefresh().subscribe((value: boolean) => {
      if (value) {
        this.getItens();
      }
    });
  }

  count(event: any) {
    this.getItens();
  }

  getItens() {
    var lista = this.storageService.getAll();

    var filtro = lista.filter((filtro: { inputTexto: any; selectTipo: any; }, index: any, array: any[]) => array.findIndex(f => f.inputTexto == filtro.inputTexto && f.selectTipo == filtro.selectTipo) == index);
    console.log(filtro);
    console.log(lista);
    this.itens = filtro;
  }

  clear() {
    this.storageService.clear();
    this.refreshService.setRefresh(true);
  }
}
