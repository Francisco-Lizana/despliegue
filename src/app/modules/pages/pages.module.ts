import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { NgChartsModule } from 'ng2-charts';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AgendaComponent } from './agenda/agenda.component';

import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { ModificarServicioComponent } from './servicios/modificar-servicio/modificar-servicio.component';
import { AgregarServicioComponent } from './servicios/agregar-servicio/agregar-servicio.component';
import { EliminarServicioComponent } from './servicios/eliminar-servicio/eliminar-servicio.component';
import { AnadirServicioComponent } from './servicios/anadir-servicio/anadir-servicio.component';
import { AgregarAgendaComponent } from './agenda/agregar-agenda/agregar-agenda.component';

// pipes
import { HoraPipe } from '../../core/_pipes/hora.pipe';
import { FormatoCostoPipe } from 'src/app/core/_pipes/formatoMoneda.pipe';
// intento de calendario
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditarAgendaComponent } from './agenda/editar-agenda/editar-agenda.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [

    InicioComponent,
    AccountSettingsComponent,
    GraficaPieComponent,
    
    AgendaComponent,
    HoraPipe,
    AgendaListComponent,
    FormatoCostoPipe,
    ServiciosComponent,
    PacientesComponent,
    FichaClinicaComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    LoginComponent,
    ToolbarComponent,
    ModificarServicioComponent,
    AgregarServicioComponent,
    EliminarServicioComponent,
    AnadirServicioComponent,
    AgregarAgendaComponent,
    EditarAgendaComponent,
    CrearPacienteComponent,
    HeaderComponent,
    SidebarComponent


  ], exports: [

    InicioComponent,
    NgChartsModule,
    AccountSettingsComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [

    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    SharedModule,
    RouterModule,
    NgChartsModule,


  ]
})
export class PagesModule { }
