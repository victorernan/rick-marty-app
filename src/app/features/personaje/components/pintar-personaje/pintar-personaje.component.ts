import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pintar',
  templateUrl: './pintar-personaje.component.html',
  styleUrls: ['./pintar-personaje.component.css']
})
export class PintarPersonajeComponent {

  constructor() { }

  @Input() personajes: IPersonaje[];
  @Input() char: string;
  @Input() gender_input: string;

}
