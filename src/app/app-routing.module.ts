import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared/components/login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/iniciar-sesion', pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
