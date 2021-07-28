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

  constructor(private service : PersonajeServiceService) { }
  
  ngOnInit(): void {
    this.mostrarPersonajes();
  }

  mostrarPersonajes(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajes = resp;
        this.gender = [...new Set(this.personajes.map(item => item.gender))];
        //console.log(this.personajes);
      });
  }
}