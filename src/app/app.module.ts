import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinioViajeComponent } from './destinio-viaje/destinio-viaje.component';
import { ListaDestinoComponent } from './lista-destino/lista-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinioViajeComponent,
    ListaDestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
