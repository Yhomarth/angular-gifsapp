import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _url: string = 'http://api.giphy.com/v1/gifs/search';
  private _apiKey : string = 'wItuOBvlpBLFlLN0bBXz398klrJJny7c';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor( private http: HttpClient ) {}

  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial = this._historial.splice(0,10);
      this._historial.unshift(query);  
    }

    const callUrl: string = `${this._url}?api_key=${this._apiKey}&q=${query}&limit=10`;

    this.http.get<SearchGifsResponse>(callUrl)
        .subscribe(  (resp ) => {
 
          this.resultados = resp.data;
          console.log(this.resultados);
        });
    

    
   // console.log(this._historial);
  }
  
}
