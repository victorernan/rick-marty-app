import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { pluck, tap, toArray, catchError } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';

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
    return this.httpservice.get<any>(urlChar).
          pipe(
            pluck('results'),
            catchError(err => this.handleError(err))
          );
    }

    handleError(error: HttpErrorResponse){
      console.log(error);
      console.warn("error ", error);
      return throwError("Error victor");
    }


}