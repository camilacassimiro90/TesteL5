import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HistoricoComponent } from './core/pages/historico/historico.component';
import { ListaMusica } from './core/shared/services/lista-musica.service.ts/lista-musica.service.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricoComponent,
    ListaMusica.Service.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
