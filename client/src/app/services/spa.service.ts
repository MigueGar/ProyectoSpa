import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spa } from '../models/spa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Spa> {
    return this.http.get(`${this.API_URI}/spa`);
  }

  getService(id: string): Observable<Spa> {
    return this.http.get(`${this.API_URI}/spa/${id}`);
  }

  getHorario(id: string): Observable<Spa> {
    return this.http.get(`${this.API_URI}/spa/horario/${id}`);
  }

}
