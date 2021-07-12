import { Component, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.css']
})
export class PersonajeDetalleComponent implements OnInit {

  characters : IPersonaje[];
  id: any;
  episode : IEpisode[];

  constructor(private service : PersonajeServiceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.getSingleChar();
    this.getEpisode();
  }

  getSingleChar():void{
    this.id = this.router.snapshot.paramMap.get('id');  //catch the id from url
    this.service.getCharacter(this.id)
      .subscribe((resp : any)=>{
        this.characters = [resp];
         console.log("caracteres ",typeof(this.characters));
      });
  }

  getEpisode(): void{
    this.service.getEpisode(this.id)
      .subscribe((resp)=>{
        this.episode = [resp];
        console.log("episodios: ",resp);
        
      });
    }
}
