import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*module components */
import { PersonajeRoutingModule } from './personaje-routing.module';

/*components */
import { PersonajeListComponent } from './components/list/personaje-list.component';
import { PersonajeDetalleComponent } from './components/detalle/personaje-detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PintarPersonajeComponent } from './components/pintar-personaje/pintar-personaje.component';
@NgModule({
  declarations: [
    PersonajeListComponent,
    PersonajeDetalleComponent,
    BuscarComponent,
    PintarPersonajeComponent,
  ],
  imports: [ 
    CommonModule,
    PersonajeRoutingModule,
  ]
})
export class PersonajeModule { }