import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class LugaresService {


    lugares: any = null;

    API_ENDPOINT = 'https://cursoplatzi-1533274697696.firebaseio.com';

    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {

    }

    public getLugares() {
        //return this.afDB.list('lugares/');
        return this.http.get(this.API_ENDPOINT + '/.json')
        .pipe(map((resultado) =>{
            const data = resultado;
            return data['lugares'];
        }))
    }

    public buscarLugar(id) {
        //return this.lugares.filter((lugar) => { return lugar.id == id })[0] || {};
        return this.http.get(this.API_ENDPOINT + '/lugares/' + id + '.json');

    }

    public guardarLugar(lugar) {
        console.log(lugar);
        //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        const header = { "Content-Type": "application/json" };

        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: header });
    }

    public getLugar(id) {
        return this.afDB.object('lugares/' + id);
    }


    public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    public obtenerGeoData(direccion) {
        //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        console.log('direccion : ' + direccion);
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    }

}