import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { NotLoggedInGuard } from './core/_guards/not-logged-in/not-logged-in.guard';
import { LoginComponent } from './modules/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  {
    path: '',
    loadChildren: () => import('./modules/pages/pages.routing').then(m => m.PagesRoutingModule)
  },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
