import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListaMusicalService } from 'src/app/shared/services/lista-musical.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { RefreshService } from 'src/app/shared/services/refresh.service';
import { NgxPaginationModule } from 'ngx-pagination';

export interface ISearch {
  inputTexto: string;
  selectTipo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputTexto!: string;
  selectTipo!: string;
  listaArtista!: boolean;
  listaAlbum!: boolean;

  position: number = 0;
  itensPage = [];
  itensPorPagina = 6;
  paginaAtual = 1;
  dadosCarregados = false;


  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   console.log('Scroll event triggered!');
  //   this.position = window.pageYOffset;
  //   console.log('Position updated to:', this.position);
  // }

  // scrollToTop() {
  //   console.log('Scroll to top button clicked!');
  //   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  // }


  public defaultItem: { text: string } = {
    text: "Escolha o tipo",
  };

  selectOpcoes = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  itens: any[] = [];

  constructor(private listaMusicaService: ListaMusicalService, private storageService: LocalStorageService,
    private refreshService: RefreshService) { }

  ngOnInit(): void { }

  pesquisar() {
    let date = new Date();
    this.storageService.set(
      date.toLocaleDateString() + '-' + date.toLocaleTimeString(),
      this.selectTipo + '=' + this.inputTexto
    );

    this.refreshService.setRefresh(true);

    if (this.selectTipo == 'album') {
      this.listaAlbum = true;
      this.listaMusicaService.pesquisarPorAlbum(this.inputTexto).subscribe(
        (response) => {
          this.itens = response.results.albummatches.album;
          this.dadosCarregados = true;
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.selectTipo == 'artista') {
      this.listaAlbum = false;
      this.listaMusicaService.pesquisarPorArtista(this.inputTexto).subscribe(
        (response) => {
          this.itens = response.results.artistmatches.artist;
          this.dadosCarregados = true;

        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
