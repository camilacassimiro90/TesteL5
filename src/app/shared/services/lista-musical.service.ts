import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaMusicalService {

  urlApi: String = "http://ws.audioscrobbler.com";
  apiKey: String = "84631623a8d2162b965939302ac06939";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  pesquisarPorArtista(artist: String): Observable<any> {
    return this.httpClient.post<any>(this.urlApi + "/2.0/?method=artist.search&artist=" + artist + "&api_key=" + this.apiKey + "&format=json", null);
  }

  pesquisarPorAlbum(album: String): Observable<any> {
    return this.httpClient.post<any>(this.urlApi + "/2.0/?method=album.search&album=" + album + "&api_key=" + this.apiKey + "&format=json", null);
  }


}
