import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-destinio-viaje',
  templateUrl: './destinio-viaje.component.html',
  styleUrls: ['./destinio-viaje.component.css']
})
export class DestinioViajeComponent implements OnInit {
  @Input() nombre:string;
  @HostBinding('attr.class') cssClass = 'col-md-4'
  constructor() {
    this.nombre="Nombre por defecto";
   }

  ngOnInit(): void {
  }

}
