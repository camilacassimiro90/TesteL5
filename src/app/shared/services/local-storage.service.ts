import { Injectable } from '@angular/core';

export class ListaHistorico {
  inputTexto!: string;
  selectTipo!: string;
}

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, value);
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return this.storage.getItem(key);
    }
    return null;
  }

  getAll(): any {
    var listaSalva = [],
      historico: ListaHistorico[] = [],

      keys = Object.keys(localStorage),
      i = 0,
      key;
    for (; (key = keys[i]); i++) {
      let item = localStorage.getItem(key);
      listaSalva.push(item);
    }

    const map = new Map(Object.entries(listaSalva));
    map.forEach(function (value, key) {
      if (typeof value === 'string') {
        let item = value.split("=");
        let listaHistorico = new ListaHistorico();
        listaHistorico.selectTipo = item[0];
        listaHistorico.inputTexto = item[1];
        historico.push(listaHistorico);
      }
    })
    return historico;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
