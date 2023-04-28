import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  base_url=environment.base_url;
  constructor(
      private http: HttpClient, 
      ) { }
      obtenerServiciosPorProfesional(id_profesional: number): Observable<any> {
    return this.http.get(`${this.base_url}/profesionales/${id_profesional}/servicios`);
  }
}
