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
  userInfo: any;
  pacienteSeleccionado: any;
  agendas: any[] = [];
  pacientes: any[] = [];
  servicios: any[] = [];
  idAgenda: any;
  searchText: string = '';
  mostrarLista: boolean = true;
  fechaAgendamiento: Date = new Date();
  horaAgendamiento: string = '';
  servicioSeleccionado:any;

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
      console.log(this.pacientes);
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

  agregarAgenda(): void {
    const nuevaAgenda = {
      fecha_agendamiento: this.fechaAgendamiento,
      hora_agendamiento: this.horaAgendamiento,
      id_paciente: this.pacienteSeleccionado.id,
      id_profesional: this.userInfo.id,
      id_servicio: this.servicios[0].id, // No especificaste cómo obtener el servicio, así que se está asumiendo que se selecciona el primer servicio de la lista
    };

    this.agendaService.agregarAgenda(nuevaAgenda).subscribe(respuesta => {
      this.toastService.showSuccess(respuesta.message);
      this.cambiosRealizados.emit();
    }, error => {
      this.toastService.showError(error.message);
    });
  }
}
