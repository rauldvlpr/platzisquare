import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {

    lugar: any = {};
    id: any = null;

    constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id']);
        this.id = this.route.snapshot.params['id'];

        if (this.id != 'new') {
            this.lugaresService.getLugar(this.id)
                .valueChanges().subscribe((lugar) => {
                    this.lugar = lugar;
                });
        }
    }

    guardaLugar() {
        var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
        this.lugaresService.obtenerGeoData(direccion)
            .subscribe((result) => {
                //this.lugar.lat = result.results[0].geometry.location.lat;
                //this.lugar.lng = result.results[0].geometry.location.lng;

                if (this.id != 'new') {

                    this.lugaresService.editarLugar(this.lugar);
                    alert('Negocio editado con exito');

                } else {
                    this.lugar.id = Date.now();
                    this.lugaresService.guardarLugar(this.lugar)
                        .subscribe((r)=>console.log(r), (e)=>console.log(e));
                    alert('Negocio guardado con exito');
                }
                
                this.lugar = {};
            });
    }

}