import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*module components */
import { PersonajeRoutingModule } from './personaje-routing.module';

import { PersonajeListComponent } from './components/list/personaje-list.component';
import { PersonajeDetalleComponent } from './components/detalle/personaje-detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CardsBusquedaComponent } from 'src/app/share/components/cards-busqueda/cards-busqueda.component';

//import { ShareModule } from '../../share/components/share.module';

@NgModule({
  declarations: [
    PersonajeListComponent,
    PersonajeDetalleComponent,
    BuscarComponent,
    // CardsBusquedaComponent
  ],
  imports: [ 
    CommonModule,
    PersonajeRoutingModule,
  ]
})
export class PersonajeModule { }