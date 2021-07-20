import { Component, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})

export class PersonajeListComponent implements OnInit {

  personajes : IPersonaje[];
  constructor(private service : PersonajeServiceService) { }
  
  ngOnInit(): void {
    this.mostrarPersonajes();
  }
  
  mostrarPersonajes(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajes = resp;
        console.log( this.personajes);
      });
    }   
}