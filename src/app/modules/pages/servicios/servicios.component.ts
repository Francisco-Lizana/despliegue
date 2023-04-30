import { Component, EventEmitter, OnInit } from '@angular/core';
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
  mostrarAgregarServicio = false;
  mostrarModificarServicio = false;
  mostrarEliminarServicio = false;
  mostrarAnadirServicio = false;
  userInfo: any;
  servicios: any[] = [];
  numServicioPorPagina: number = 5;
  paginaActual: number = 1;
  inicio: number = 0;
  ordenNombreAscendente: boolean = true;
  ordenPrecioAscendente: boolean = true;
  numAgendasPorPagina: number = 5;
  

  constructor(
    private _servicioService: servicioService,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this._servicioService.obtenerServiciosPorProfesional(this.userInfo.id).subscribe(respuesta => {
      this.servicios = respuesta.servicios;
    });
  }
  obtenerTextoPaginacion(): string {
    const paginaActual = Math.floor(this.inicio / 5) + 1;
    const totalPaginas = Math.ceil(this.servicios.length / 5);
    return `Página ${paginaActual} de ${totalPaginas}`;
  }

  ordenarPorNombre(): void {
    this.servicios.sort((a, b) => {
      if (this.ordenNombreAscendente) {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });
    this.ordenNombreAscendente = !this.ordenNombreAscendente;
  }
  
  ordenarPorPrecio(): void {
    this.servicios.sort((a, b) => {
      if (this.ordenPrecioAscendente) {
        return a.costo - b.costo;
      } else {
        return b.costo - a.costo;
      }
    });
    this.ordenPrecioAscendente = !this.ordenPrecioAscendente;
  }
  

  mostrarComponenteAgregarServicio() {
    this.mostrarAgregarServicio = true;
    this.mostrarEliminarServicio = false;
    this.mostrarModificarServicio = false;
    this.mostrarAnadirServicio=false;
  }

  mostrarComponenteEliminarServicio() {
    this.mostrarEliminarServicio = true;
    this.mostrarModificarServicio = false;
    this.mostrarAgregarServicio = false;
    this.mostrarAnadirServicio=false;
  }    

  mostrarComponenteModificarServicio() {
    this.mostrarModificarServicio = true;
    this.mostrarEliminarServicio = false;
    this.mostrarAgregarServicio = false;
    this.mostrarAnadirServicio=false;
  }

  mostrarComponenteAnadirServicio() {
    this.mostrarAnadirServicio=true;
    this.mostrarModificarServicio = false;
    this.mostrarEliminarServicio = false;
    this.mostrarAgregarServicio = false;
   
  }

  actualizarServicios(): void {
    this.obtenerServicios();
  }
  
}
