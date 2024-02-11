import { Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-pintar',
  templateUrl: './pintar-personaje.component.html',
  styleUrls: ['./pintar-personaje.component.css']
})
export class PintarPersonajeComponent implements OnInit {

  constructor() { }

  @Input() personajes: IPersonaje[];
  @Input() activarComponente;
  @Input() episode: IEpisode[];

  ngOnInit(): void {
  }
}
