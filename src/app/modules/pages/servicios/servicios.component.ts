import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/_services/auth.service';
import { servicioService } from 'src/app/core/_services/servicio-profesional.service';
import { DecimalPipe } from '@angular/common';
import { FormatoCostoPipe } from '../../../core/_pipes/formatoMoneda.pipe';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [DecimalPipe, FormatoCostoPipe]
})
export class ServiciosComponent implements OnInit {
  userInfo: any;
  servicios: any[] = [];
  numServicioPorPagina: number = 5;
  paginaActual: number = 1;
  constructor(
    private _servicioService: servicioService,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
    this.obtenerServicios()
  }

  obtenerServicios(): void {
    this._servicioService.obtenerServiciosPorProfesional(this.userInfo.id).subscribe(respuesta => {
      this.servicios = respuesta.servicios;
    });
  }
}
