import { NgModule, Component } from '@angular/core';
// Modulos

import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './modules/pages/pages.routing';


import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { NotLoggedInGuard } from './core/_guards/not-logged-in/not-logged-in.guard';
import { LoginComponent } from './modules/pages/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate:[NotLoggedInGuard]},
  {path: '**',component: NopagefoundComponent},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
