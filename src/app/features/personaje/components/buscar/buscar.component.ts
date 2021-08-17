import { Component, Input,  ViewChild, ElementRef } from '@angular/core';
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
  error_http : any;
  no_coincidencias = "No hay coincidencias";
  gender_input : string;

  @Input() gender : any[];
  @ViewChild('notFound') private notFound: ElementRef;

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
      }, (err)=>{
        this.error_http = true;
        this.error_http = setTimeout(()=>{
          this.notFound.nativeElement.remove();
        },2000);
      });
  }

  regresar() {
    this.location.back();
  }

}
