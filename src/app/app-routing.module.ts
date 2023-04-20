import { NgModule, Component } from '@angular/core';
// Modulos
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './modules/pages/pages.routing';
import { AauthRoutingModule } from './modules/auth/auth.routing';

import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';

const routes: Routes = [

  {path: '**',component: NopagefoundComponent},

];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  AauthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
