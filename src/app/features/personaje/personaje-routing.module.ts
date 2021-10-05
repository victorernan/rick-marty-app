import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajeListComponent } from './components/list/personaje-list.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PersonajeDetalleComponent } from './components/detalle/personaje-detalle.component';

const routes: Routes = [
  {
    path:'personajes', 
    component: PersonajeListComponent, 
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'detalle-personaje/:id',
    component: PersonajeDetalleComponent,
  },
  {
    path : '*', redirectTo: '/personajes', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeRoutingModule { }
