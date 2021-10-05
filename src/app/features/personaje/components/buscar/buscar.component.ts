import { Component, Input,  ViewChild, ElementRef } from '@angular/core';

import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';

import { PersonajeListComponent } from './../list/personaje-list.component'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers : [PersonajeListComponent]
})
export class BuscarComponent  {

  personajes : IPersonaje[];
  char : string;
  gender : any;
  error_http : any;
  no_coincidencias = "No hay coincidencias";

  @Input() genderSelected : string ;
  @ViewChild('notFound') private notFound: ElementRef;

  constructor(
    private service : PersonajeServiceService,
    private listComponent :  PersonajeListComponent)
    { }

  ngOnInit(): void {
    this.mostrarPersonajes();
  }

  public mostrarPersonajes(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajes = resp;
        this.gender = [...new Set(this.personajes.map(item => item.gender))];
      });
  }

  buscar(char: string){
    char = char.toLowerCase();
    if(!char){
      return [];
    }
     if(char=="female" || char=="male" || char == "unknown" ){
      this.service.searchCharacterByGender(char).subscribe((resp: any) =>{
        this.personajes = resp;
      });
    }
    else{
      this.service.searchCharacters(char)
       .subscribe((resp: any)=>{
         this.personajes = resp;
       }, (err)=>{
        this.error_http = true;
         this.error_http = setTimeout(()=>{
            this.notFound.nativeElement.remove();
          },5000);
       });
    }
  }

}