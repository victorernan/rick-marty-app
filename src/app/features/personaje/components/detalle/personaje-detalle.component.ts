import { Component, Input, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.css']
})
export class PersonajeDetalleComponent implements OnInit {

  characters : IPersonaje[];
  epidose : any;
  id: any;
  id_otros_personajes: [];
  episode : IEpisode[];

  constructor(private location: Location, 
              private service : PersonajeServiceService, 
              private router : ActivatedRoute, 
              public r : Router) { }

  ngOnInit(): void {
    this.getSingleChar();
    this.getEpisode();
  }

  getSingleChar():void{
    this.id = this.router.snapshot.paramMap.get('id'); 
    this.service.getCharacter(this.id)
      .subscribe(((resp) =>{
        if(!resp){
          this.r.navigateByUrl('/personajes');
          return;
        }
        this.characters = [resp];
      }));
  }

  getEpisode(): void{
    this.service.getEpisode(this.id)
      .subscribe((resp: any)=>{
        this.epidose = resp;
        
        console.log(this.epidose );
      });
  }

  regresar() {
    this.location.back();
  }
}