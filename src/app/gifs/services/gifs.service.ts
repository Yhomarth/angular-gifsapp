import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial():string[]{
    return [...this._historial];
  }

  buscarGifs(query: string){

    if(this._historial.length === 10 ){
      this._historial.pop();
    } 
    
    this._historial.unshift(query);



    console.log(this._historial);
  }
  
}
