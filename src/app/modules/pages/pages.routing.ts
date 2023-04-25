import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from '../pages/pages.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { NotLoggedInGuard } from 'src/app/core/_guards/not-logged-in/not-logged-in.guard';
import { AuthGuard } from 'src/app/core/_guards/auth/auth.guard';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [AuthGuard],
        data: { titulo: 'Inicio' }
      },
      {
        path: 'grafica1',
        component: GraficaPieComponent,
        canActivate: [AuthGuard],
        data: { titulo: 'Grafica1' }
      },
      {
        path: 'acccount-seting',
        component: AccountSettingsComponent,
        canActivate: [AuthGuard],
        data: { titulo: 'Configuración' }
      },
      {
        path: 'agenda',
        component: AgendaComponent,
        canActivate: [AuthGuard],
        data: { titulo: 'Agenda' }
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
