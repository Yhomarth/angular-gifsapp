import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  
  constructor(private getService: GifsService) { }

  get historial() : string[] {
    return this.getService.historial
  }


  cargarImagen(  imgBuscar: string ) :void {
    console.log('a buscar la imagen:', imgBuscar);
    this.getService.buscarGifs(imgBuscar);
  }


}
