import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './modules/pages/pages.module';



import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpInterceptorService } from './core/_services/http-interceptor.service';
import { MessageService } from 'primeng/api';
import { ToastService } from './core/_services/toast.service';
import { InicioComponent } from './modules/pages/inicio/inicio.component';
import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { PagesComponent } from './modules/pages/pages.component';
import { SidebarComponent } from './modules/pages/sidebar/sidebar.component';






@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    PagesComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,  
    MatProgressSpinnerModule,
   
    PagesModule,
   
    
  ],
  providers: [
    MessageService,
    ToastService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
