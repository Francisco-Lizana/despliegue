import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendaService } from 'src/app/core/_services/agenda.service';
import { AuthService } from 'src/app/core/_services/auth.service';
import { PacienteService } from 'src/app/core/_services/paciente.service';
import { servicioService } from 'src/app/core/_services/servicio-profesional.service';
import { ToastService } from 'src/app/core/_services/toast.service';



@Component({
  selector: 'app-agregar-agenda',
  templateUrl: './agregar-agenda.component.html',
  styleUrls: ['./agregar-agenda.component.css']
})
export class AgregarAgendaComponent implements OnInit {
  servicioFrom: FormGroup = new FormGroup({});
  mostrarInformacion = true;
  // iNFORMACION PARA AGREGAR AGENDA
  pacienteSeleccionado: any;
  servicioSeleccionado:any;
  userInfo: any;
  fechaAgendamiento: Date = new Date();
  horaAgendamiento: string = '';
  idServicio : any;

  agendas: any[] = [];
  pacientes: any[] = [];
  servicios: any[] = [];
  idAgenda: any;
  searchText: string = '';
  mostrarLista: boolean = false;
  
  
  horas: string[] = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];
  

  @Output() cambiosRealizados = new EventEmitter();

  constructor(
    private agendaService: AgendaService,
    private pacienteService: PacienteService,
    private _authService: AuthService,
    private _servicioService: servicioService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
    this.obtenerPacientes();
    this.obtenerServicios();
    this.servicioFrom = this.formBuilder.group({
      fecha_agendamiento: '',
      hora_agendamiento: '',
      servicio: ''
    });
  }

  obtenerServicios(): void {
    this._servicioService.obtenerServiciosNoRelacionadosPorProfesional(this.userInfo.id).subscribe(respuesta => {
      this.servicios = respuesta.servicios;
      
    });
  }

  obtenerPacientes(): void {
    this.pacienteService.obtenerPacientes().subscribe(respuesta => {
      this.pacientes = respuesta.paciente;
      this.filtrarOpciones(this.searchText);
      
    });
  }

  filtrarOpciones(texto: string): any[] {
    return this.pacientes.filter(paciente => paciente.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

  seleccionarPaciente(paciente: any): void {
    this.pacienteSeleccionado = paciente;
    this.searchText = paciente.nombre;
    this.mostrarLista = false;

  }



  toggleInformacion(): void {
    if (this.mostrarInformacion) {
    }
    this.mostrarInformacion = !this.mostrarInformacion;
  }
  cancelarEdicion(): void {
  
    this.ngOnInit();
    this.cambiosRealizados.emit();
  }
  buscarServicios(): void {
    
    if (this.servicioSeleccionado) {
      this._servicioService.obtenerServiciosPorNombre(this.servicioSeleccionado).subscribe(
        respuesta => {
          if (respuesta.servicio) {
             this.idServicio = respuesta.servicio.id_servicio;
             console.log(this.idServicio);
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.toastService.showError('Ingrese un nombre valido');
    }
  }

  
  guardarCambios(): void {
   
    const nuevaAgenda = {
      fecha_agendamiento: this.fechaAgendamiento.toISOString().substring(0, 10),
      hora_agendamiento: this.horaAgendamiento,
      id_paciente: this.pacienteSeleccionado.id_paciente,
      idProfesional: this.userInfo.id,
      idServicio: this.idServicio, 
    };
    console.log(nuevaAgenda);
    this.agendaService.agregarAgenda(nuevaAgenda).subscribe(respuesta => {
      this.toastService.showSuccess(respuesta.message);
      this.cambiosRealizados.emit();
    }, error => {
      this.toastService.showError(error.message);
    });

}
}
