import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { pluck, map, catchError } from 'rxjs/operators';
import { Observable, of, pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  url : string = "https://rickandmortyapi.com/api";
  epidose : IEpisode[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), responseType: 'blob' as 'json' 
  };

  constructor(private httpservice: HttpClient) { }

  getAllCharacters():Observable<IPersonaje[]> {
    return this.httpservice.get<any>(`${this.url}/character`).pipe(pluck('results'));
  }

  getCharacter(char: string):Observable<IPersonaje>{
    return this.httpservice.get<any>(`${this.url}/character/${char}`).pipe(catchError(err => of([])));
  }

  getEpisode(id: number):Observable<IEpisode>{
    return this.httpservice.get<any>(`${this.url}/episode/${id}`).pipe(
      map((data) => data['characters'])
    );
  }


  searchCharacters(nombre: string):Observable<IPersonaje>{
    return this.httpservice.get<any>(`${this.url}/character/?name=${nombre}`).
          pipe(
            pluck('results'))
  }

  searchCharacterByGender(gender : string):Observable<IPersonaje>{
    return this.httpservice.get<any>(`${this.url}/character/?gender=${gender}`).
          pipe(
            pluck('results'))
  }

  getCharPage(page: number):Observable<IPersonaje>{
    return  this.httpservice.get<any>(`${this.url}/character/${page}`);
  }

}