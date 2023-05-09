import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgendaService } from 'src/app/core/_services/agenda.service';
import { AuthService } from 'src/app/core/_services/auth.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {
  agendas: any[] = [];
  ordenAscendente: boolean = true;
  inicio: number = 0;
  userInfo: any;
  mostrarEditarAgenda=false;
  @Output() cambiosRealizados = new EventEmitter();
  constructor(
    private agendaService: AgendaService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userInfo = this.authService.obtenerInformacionToken();
    this.obtenerAgendas();
  }

  obtenerAgendas(): void {
    this.agendaService.obtenerAgendasProfesional(this.userInfo.id).subscribe(respuesta => {
      this.agendas = respuesta.agendas;

      this.agendas.sort((a, b) => {
        if (b.estado.status < a.estado.status) {
          return -1;
        } else if (a.estado.status > b.estado.status) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }
  mostrarComponenteEditarAgenda(idAgenda:number) {
    this.agendaService.enviarIdAgenda(idAgenda);
    this.mostrarEditarAgenda = true;
  }

  ordenarPorEstado(): void {
    this.agendas.reverse();
    this.ordenAscendente = !this.ordenAscendente;
  }

  cambiarPagina(valor: number): void {
    this.inicio += valor;
  }

  obtenerTextoPaginacion(): string {
    const paginaActual = Math.floor(this.inicio / 5) + 1;
    const totalPaginas = Math.ceil(this.agendas.length / 5);
    return `Página ${paginaActual} de ${totalPaginas}`;
  }

  actualizarAgendas(){
    
    this.mostrarEditarAgenda = false;
    this.obtenerAgendas();
  }
}
