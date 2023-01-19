import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class ListaHistorico {
  inputTexto!: string;
  selectTipo!: string;
}

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public getRefresh(): Observable<boolean> {
    return this.refresh.asObservable();
  }

  public setRefresh(value: boolean): void {
    this.refresh.next(value);
  }
}
