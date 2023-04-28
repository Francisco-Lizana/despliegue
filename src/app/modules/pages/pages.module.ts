import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { NgChartsModule } from 'ng2-charts';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfesionalInformacionComponent } from './account-settings/profesional-informacion/profesional-informacion.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HoraPipe } from '../../core/_pipes/hora.pipe';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormatoCostoPipe } from 'src/app/core/_pipes/formatoMoneda.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    AccountSettingsComponent,
    GraficaPieComponent,
    ProfesionalInformacionComponent,
    AgendaComponent,
    HoraPipe,
    AgendaListComponent,
    FormatoCostoPipe,
    ServiciosComponent,


    
  ],exports: [
    DashboardComponent,
    InicioComponent,
    NgChartsModule,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgChartsModule,
  ]
})
export class PagesModule { }
