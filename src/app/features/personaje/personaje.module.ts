import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*module components */
import { PersonajeRoutingModule } from './personaje-routing.module';

/*components */
import { PersonajeListComponent } from './components/list/personaje-list.component';
import { PersonajeDetalleComponent } from './components/detalle/personaje-detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PintarPersonajeComponent } from './components/pintar-personaje/pintar-personaje.component';
import { SlideshowPersonajesComponent } from './components/slideshow-personajes/slideshow-personajes.component'

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    PersonajeListComponent,
    PersonajeDetalleComponent,
    BuscarComponent,
    PintarPersonajeComponent,
    SlideshowPersonajesComponent
  ],
  imports: [ 
    CommonModule,
    PersonajeRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatPaginatorModule
  ]
})
export class PersonajeModule { }