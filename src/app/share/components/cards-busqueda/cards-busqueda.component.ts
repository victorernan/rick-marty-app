import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-busqueda',
  templateUrl: './cards-busqueda.component.html',
  styleUrls: ['./cards-busqueda.component.css']
})
export class CardsBusquedaComponent  {

  @Input() resultado: any; 
  
  constructor() { }

  resultadoBusqueda(item: any){
    console.log("ques muestra");
  }
}
