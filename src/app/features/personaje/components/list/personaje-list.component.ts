import { Component, Input, OnInit } from '@angular/core';
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
  currentPage: number;
  numPages: number;

  constructor(private service : PersonajeServiceService) {
    this.currentPage = 1;
  }

  @Input() person: IPersonaje[];
  
  ngOnInit(): void {
    this.mostrarPersonajes();
  }

  public mostrarPersonajes(): void{
    this.service.getAllCharacters()
     .subscribe(resp => {
        this.personajes = resp;
        this.numPages = resp['info']['pages'];
      },
      (error) =>{ console.error(error);
    });
  }

  public cambiarPagina(next) {
    if (next) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.service.getAllCharacters(this.currentPage).
      subscribe((res)=>{
        console.log(res);
       return this.personajes= res;
      })
  
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