import { Component, OnInit } from '@angular/core';
import { DestinioViajeComponent } from '../destinio-viaje/destinio-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model'
@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {
  destinos : DestinoViaje[];
  constructor() {
    //this.destinos=["Barcelona","Lleida","Tarragona","Girona"];
    this.destinos=[];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string):boolean{
    console.log(nombre,url);
    this.destinos.push(new DestinoViaje(nombre,url))
    console.log(this.destinos);
    return false;
  }
}
