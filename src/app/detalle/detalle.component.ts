import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../servicios/lugares.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {

    
    id = null;
    lugar:any = {};

    constructor(private route: ActivatedRoute, lugaresService:LugaresService) {
        console.log(this.route.snapshot.params['id']);
        this.id = this.route.snapshot.params['id'];
        this.lugar = lugaresService.buscarLugar(this.id);
    }


    

}