import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/'
  URL = 'https://portfolio-back-tbb6.onrender.com/personas/'
  
  constructor(private http:HttpClient) { }

  // public getPersona(): Observable<persona>{
  //   return this.http.get<persona>(this.URL+ 'traer');
  // }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
