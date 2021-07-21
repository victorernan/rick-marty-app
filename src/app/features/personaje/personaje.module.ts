import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*module components */
import { PersonajeRoutingModule } from './personaje-routing.module';

import { PersonajeListComponent } from './components/list/personaje-list.component';
import { PersonajeDetalleComponent } from './components/detalle/personaje-detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';
@NgModule({
  declarations: [
    PersonajeListComponent,
    PersonajeDetalleComponent,
    BuscarComponent,
  ],
  imports: [ 
    CommonModule,
    PersonajeRoutingModule,
  ]
})
export class PersonajeModule { }