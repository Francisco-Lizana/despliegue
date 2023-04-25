import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/core/_services/agenda.service';
import { ToastService } from 'src/app/core/_services/toast.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agendas: any[] = [];
  rutBuscado: string = '';
  ordenAscendente: boolean = true;
  inicio: number = 0;
  numAgendasPorPagina: number = 5;
paginaActual: number = 1;
  constructor(private agendaService: AgendaService, private toastService: ToastService,) { }

  ngOnInit(): void {
    this.obtenerAgendas();
  }

  obtenerAgendas(): void {
    this.agendaService.obtenerAgendas().subscribe(respuesta => {
      this.agendas = respuesta.agendas;
      console.log(this.agendas);
    });
  }

  buscarAgendas(): void {
    if (this.rutBuscado) {
      this.agendaService.obtenerAgendasPorRut(this.rutBuscado).subscribe(
        respuesta => {
          this.agendas = respuesta.agendas;
          this.toastService.showSuccess('Agendas encontradas');
        },
        error => {
          this.obtenerAgendas();

        }
      );
    } else {
      this.toastService.showError('Ingrese un rut válido');
    }
  }
  


}
