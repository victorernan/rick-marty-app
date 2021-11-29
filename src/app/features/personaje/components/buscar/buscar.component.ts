import { Component, Input,  ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonajeServiceService } from '../../services/personajes/personaje-service.service';
import { PersonajeListComponent } from './../list/personaje-list.component'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers : [PersonajeListComponent]
})
export class BuscarComponent  {

  personajesBusqueda : IPersonaje[];
  char : string;
  gender : any;
  error_http : any;
  activarComponente : boolean;

  @Input() genderSelected : string ;
  @ViewChild('notFound') private notFound: ElementRef;

  constructor(private service : PersonajeServiceService){ }

  ngOnInit(): void {
    this.botenesSelect();
  }

  group = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
  });

  //funcion pensada para construir el select de manera dinamica
  public botenesSelect(): void{
    this.service.getAllCharacters()
      .subscribe((resp)=>{
        this.personajesBusqueda = resp;
        this.gender = [...new Set(this.personajesBusqueda.map(item => item.gender))];
      });
  }

  buscar(char: string){
    char = char.toLowerCase();
    if(char.length > 0){
      this.activarComponente= true;
    }
    
    if(!char){
      return [];
    }
     if(char=="female" || char=="male" || char == "unknown" ){
      this.service.searchCharacterByGender(char).subscribe((resp: any) =>{
        this.personajesBusqueda = resp;
      });
    }
    else{
      this.service.searchCharacters(char)
       .subscribe((resp: any)=>{
         this.personajesBusqueda = resp;
       }
       , (err)=>{
        this.error_http = true;
         this.error_http = setTimeout(()=>{
            this.notFound.nativeElement.remove();
          },5000);
       });
    }
  }

}