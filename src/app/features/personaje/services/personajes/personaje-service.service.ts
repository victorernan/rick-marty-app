import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, toArray } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  baseURL: string = "https://rickandmortyapi.com/api/character";

  constructor(private httpservice: HttpClient) { }

  getAllCharacters():Observable<IPersonaje[]> {
    return this.httpservice.get<any>(this.baseURL).pipe(pluck('results'));
  }

  getCharacter(char: string):Observable<IPersonaje>{
    const urlChar = `https://rickandmortyapi.com/api/character/${char}`;
    return this.httpservice.get<any>(urlChar);
    /*return this.httpservice.get<any>(`https://rickandmortyapi.com/api/character/?name=${char}`);*/
  }

  getEpisode(id: number):Observable<IEpisode>{
    const urlChar = `https://rickandmortyapi.com/api/episode/${id}`
    return this.httpservice.get<any>(urlChar);
  }

  searchCharacters(nombre: string):Observable<IPersonaje>{
    const urlChar = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
    return this.httpservice.get<any>(urlChar).pipe(pluck('results'));
  }


}