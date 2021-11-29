import { Component, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})

export class PersonajeListComponent implements OnInit {

  personajes : IPersonaje[];
  characters: any;
  urlApi: string;
  

  constructor(private service : PersonajeServiceService) { }
  
  ngOnInit(): void {
    this.mostrarPersonajes();
    //this.desordenar(this.personajes);
  }

  public mostrarPersonajes(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajes = resp;
        this.personajes = this.personajes.sort(()=> Math.random() -0.5);
      },
      (error) =>{ console.error(error);
    });
  }


  
  getPage(urlApi) {
    console.log("que recibe ", urlApi);
    
    if (urlApi === null || urlApi === '') {
      this.service.getCharPage(1).subscribe((response) => {
        this.characters = response;
      },
        (error) => { console.error(error); }
      );
    } else {
      const page = urlApi.substring(48, urlApi.lenght);
        console.log('Número de página: ' + page);
        this.service.getCharPage(page).subscribe((response) => {
          this.characters = response;
        },
          (error) => { console.error(error); }
        );
        this.service.getCharPage(page).subscribe((characters) => console.log(characters));
        
      }
  }
  
}