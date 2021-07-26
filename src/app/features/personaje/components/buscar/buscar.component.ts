import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  {

  personajes : IPersonaje[];
  char : string;

  constructor(
    private service : PersonajeServiceService,
    private location: Location) { }

    

  buscar(char: string){
    this.service.searchCharacters(char)
      .subscribe((resp: any)=>{
        this.personajes = resp;
        console.log(this.personajes);
      });
  }

  regresar() {
    this.location.back();
  }

}
