import { Injectable } from '@angular/core';
import { Router } from 'express';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericService } from './generic.service';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  base_url = environment.base_url;
  constructor(
    private http: HttpClient,
    private genericServices: GenericService,
    private messageService: MessageService,
    private toastService: ToastService,
  ) { }


  obtenerPacientes(): Observable<any> {
    return this.http.get(`${this.base_url}/getAllPacientes`);
  }

  obtenerPacientePorRut(rut: string): Observable<any> {
    return this.http.get(`${this.base_url}/getpacienteByRut/${rut}`);
  }

  actualizarInformacionPaciente(id: number, data: any) {
    return this.http.post(`${this.base_url}/editarPaciente/${id}`, data);
  }
  actualizarInformacionPacienteRut(rut: number, data: any) {
    return this.http.post(`${this.base_url}/editarPacienteRut/${rut}`, data);
  }

  registrarPaciente(data: any) {
    return this.http.post(`${this.base_url}/registrarPaciente`, data);
  }
  // desactivarPaciente(id: string): Observable<any> {
  //   return this.http.post(`${this.base_url}/desactivarPaciente/${id}`);
  // }
  // habilitarPaciente(id: string): Observable<any> {
  //   return this.http.post(`${this.base_url}/habilitarPaciente/${id}`);
  // }


}
