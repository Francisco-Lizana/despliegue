import { Component, OnInit } from '@angular/core';
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

  constructor(private agendaService: AgendaService,private _authService: AuthService,) { }

  ngOnInit(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
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


  ordenarPorEstado(): void {
    this.agendas.reverse();
    this.ordenAscendente = !this.ordenAscendente;
  }

  cambiarPagina(valor: number): void {
    this.inicio += valor;
  }
}
