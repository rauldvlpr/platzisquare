import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.service';
import { debug } from 'util';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'LibraryApp';

 
  lat: number = 51.678418;
  lng: number = 7.809007;

  lugares:any = null;

  constructor( private lugaresServices:LugaresService){
    lugaresServices.getLugares().subscribe(lugares =>{
        this.lugares = Object.values(lugares);
        //this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
      })
  }

}