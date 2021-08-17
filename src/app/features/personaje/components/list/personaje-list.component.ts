import { Component, Input, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})

export class PersonajeListComponent implements OnInit {

  personajes : IPersonaje[];
  gender_input : any;
  gender : any[];

  genderSelected : string;
 

  constructor(private service : PersonajeServiceService) { }
  
  ngOnInit(): void {
    this.mostrarPersonajes();
    //this.onGenreChange(this.genderSelected);
    //no tiene ningun sentido instanciar una funcion que se activa por medio de un boton
  }

  mostrarPersonajes(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajes = resp;
        this.personajes = this.personajes.sort(()=> Math.random() -0.5)
        this.gender = [...new Set(this.personajes.map(item => item.gender))];
      });
  }

  /*aplicar el filtro de búsqueda a la misma variable en la que se guardan todos los 
  resultados.
  1. el array va a mostrar todos los resultados que le llegan por medio de la peticion get
  2. el array contendrá los resultados del filter
  3. <app-pintar [personajes]="personajes"></app-pintar> cada ves que haya un cambio en personajes, 
  el componente presentador los recogerá y enseañará la info 
  */

  onGenreChange(genderSelected){
     console.log(genderSelected);
     
    this.personajes = [...this.personajes.filter(x=>
       x.gender.includes(genderSelected))];
       console.log(this.personajes);
       
    }
  
}