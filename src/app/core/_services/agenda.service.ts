import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  base_url = environment.base_url;
  private idAgendaSeleccionadaSubject = new BehaviorSubject<number>(0);
  public idAgendaSeleccionada$ = this.idAgendaSeleccionadaSubject.asObservable();

  enviarIdAgenda(idAgenda: number) {
    this.idAgendaSeleccionadaSubject.next(idAgenda);
  }

  // getIdAgendaSeleccionada() {
  //   return this.idAgendaSeleccionada;
  // }

  constructor(private http: HttpClient) { }
  obtenerAgendas(): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendas`);
  }

  obtenerAgendasPorRut(rutPaciente: string,id_profesional:string): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendasPorRut/${rutPaciente}/${id_profesional}`);
  }

  obtenerAgendaPorID(id: number): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendaPorId/${id}`);
  }
  obtenerAgendasProfesional(id_profesional: string): Observable<any> {
    return this.http.get(`${this.base_url}/obtenerAgendasProfesional/${id_profesional}`);
  }
  
  agregarAgenda(data: any): Observable<any> {
    return this.http.post(`${this.base_url}/agregarAgenda`, data);
  }
  
  editarAgenda(id: number, agenda: any): Observable<any> {
    return this.http.post(`${this.base_url}/editarAgenda/${id}`, agenda);
  }

  contar(): Observable<any> {
    return this.http.get(`${this.base_url}/contar`);
  }
}

