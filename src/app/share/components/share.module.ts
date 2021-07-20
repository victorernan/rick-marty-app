import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { CardsBusquedaComponent } from './cards-busqueda/cards-busqueda.component';

@NgModule({
  declarations: [
    CardsBusquedaComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports:[
    CardsBusquedaComponent
  ]
  
})
export class ShareModule { }