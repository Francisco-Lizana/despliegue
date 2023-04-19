import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NotLoggedInGuard } from 'src/app/core/_guards/not-logged-in/not-logged-in.guard';



const routes: Routes = [

    {path: 'login', component: LoginComponent,canActivate:[NotLoggedInGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AauthRoutingModule {}
