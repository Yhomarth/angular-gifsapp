import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {



  private _apiKey : string = 'wItuOBvlpBLFlLN0bBXz398klrJJny7c';
  private _historial: string[] = [];

  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query: string){

    // if(this._historial.length === 10 ){
    //   this._historial.pop();
    // } 

    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial = this._historial.splice(0,10);
      this._historial.unshift(query);  
    }
    


    console.log(this._historial);
  }
  
}
