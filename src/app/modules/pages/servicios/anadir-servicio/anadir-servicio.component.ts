import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/_services/auth.service';
import { servicioService } from 'src/app/core/_services/servicio-profesional.service';
import { ToastService } from 'src/app/core/_services/toast.service';

@Component({
  selector: 'app-anadir-servicio',
  templateUrl: './anadir-servicio.component.html',
  styleUrls: ['./anadir-servicio.component.css']
})
export class AnadirServicioComponent implements OnInit {
  userInfo: any;
  servicios: any[] = [];
  servicioSeleccionado:any;
  idServicio:any;
  
  @Output() cambiosRealizados = new EventEmitter();
  constructor(
    private _servicioService: servicioService,
    private _authService: AuthService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
    this.obtenerServicios();
    
  }
  obtenerServicios(): void {
    this._servicioService.obtenerServiciosNoRelacionadosPorProfesional(this.userInfo.id).subscribe(respuesta => {
      this.servicios = respuesta.servicios;
    });
  }

  buscarServicioPorNombre(): void {

    this._servicioService.obtenerServiciosPorNombre(this.servicioSeleccionado).subscribe(
      respuesta => {
          this.idServicio = respuesta.servicio.id_servicio;
          console.log(this.idServicio);
          this.agregarServicio();
          
      },
      error => {
        console.log(error);
      }
    );
  }
  
  agregarServicio(): void {
    this._servicioService.agregarServicioAProfesional(this.idServicio,this.userInfo.id).subscribe(
      (response) => {
        this.toastService.showSuccess("Se agrego el servicio");
        this.cambiosRealizados.emit();
      },
      error => {
        console.log(error);
      }
    );
  }

  
}




