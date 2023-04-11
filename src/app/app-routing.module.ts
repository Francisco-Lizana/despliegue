import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared/components/login/login.component';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/iniciar-sesion', pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
