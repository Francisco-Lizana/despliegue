import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { NgChartsModule } from 'ng2-charts';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    AccountSettingsComponent,
    GraficaPieComponent,
    
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
