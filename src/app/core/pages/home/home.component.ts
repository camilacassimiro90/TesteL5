import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListaMusicalService } from 'src/app/shared/services/lista-musical.service';

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

  selectOpcoes = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);


  itens: any[] = [];

  constructor(private listaMusicaService: ListaMusicalService) { }

  ngOnInit(): void { }

  pesquisar() {

    if (this.selectTipo == 'album') {
      this.listaAlbum = true;
      this.listaMusicaService.pesquisarPorAlbum(this.inputTexto).subscribe(
        (response) => {
          this.itens = response.results.albummatches.album;
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
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
