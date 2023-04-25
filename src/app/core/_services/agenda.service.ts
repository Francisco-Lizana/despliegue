import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) { }
  obtenerAgendas(): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendas`);
  }

  obtenerAgendasPorRut(rut: string): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendasPorRut/${rut}`);
  }
  obtenerAgendasProfesional(id_profesional: string): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendasProfesional/${id_profesional}`);
  }
  
  agregarAgenda(agenda: any): Observable<any> {
    return this.http.post(`${this.base_url}/agregarAgenda`, agenda);
  }
  
  editarAgenda(id: number, agenda: any): Observable<any> {
    return this.http.post(`${this.base_url}/editarAgenda/${id}`, agenda);
  }

  contar(): Observable<any> {
    return this.http.get(`${this.base_url}/contar`);
  }
}

