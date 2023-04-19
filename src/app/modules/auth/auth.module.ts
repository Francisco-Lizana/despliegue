import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    ToolbarComponent,
  ],exports: [
    LoginComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class authModule { }
