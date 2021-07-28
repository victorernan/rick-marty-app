import { Component, Input, OnInit } from '@angular/core';
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
  error_http : boolean;
  no_coincidencias = "no hay coincidencias para la búsqueda";
  gender_input : string;

  @Input() gender : any[];

  constructor(
    private service : PersonajeServiceService,
    private location: Location) { }

  buscar(char: string){
    if(!char.trim()){
      this.personajes;
    }
    this.service.searchCharacters(char)
      .subscribe((resp: any)=>{
        this.personajes = resp;
        console.log(this.personajes);
      }, (err)=>{
        this.error_http = true;
      });
  }

  onGenreChange(value){
    const gender_selected : string = value;
    this.service.filterByGender(gender_selected).
    subscribe((resp:any)=>{
      console.log(resp);
    });
  }

  regresar() {
    this.location.back();
  }

}
