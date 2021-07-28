import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { pluck, tap, toArray, catchError } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  url : string = "https://rickandmortyapi.com/api";

  constructor(private httpservice: HttpClient) { }

  getAllCharacters():Observable<IPersonaje[]> {
    return this.httpservice.get<any>(`${this.url}/character`).pipe(pluck('results'));
  }

  getCharacter(char: string):Observable<IPersonaje>{
    return this.httpservice.get<any>(`${this.url}/character/${char}`);
  }

  getEpisode(id: number):Observable<IEpisode>{
    return this.httpservice.get<any>(`${this.url}/episode/${id}`);
  }

  searchCharacters(nombre: string):Observable<IPersonaje>{
    return this.httpservice.get<any>(`${this.url}/character/?name=${nombre}`).
          pipe(
            pluck('results'),
            catchError(err => this.handleError(err))
          );
    }
    handleError(error: HttpErrorResponse){
      console.log(error);
      console.warn("error ", error);
      return throwError("Error");
    }
}