import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pintar',
  templateUrl: './pintar-personaje.component.html',
  styleUrls: ['./pintar-personaje.component.css']
})
export class PintarPersonajeComponent implements OnInit {

  constructor() { }

  @Input() personajes: IPersonaje[];
  @Input() episode: IEpisode[];


  ngOnInit(): void {
    // personajes es undefined y no puede desordenar el array
    //this.personajes = this.personajes.sort(()=> Math.random() -0.5);
  }

}
