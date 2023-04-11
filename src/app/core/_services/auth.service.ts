import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { LoginForm } from '../_interfaces/loginForm';
import { GenericService } from './generic.service';
import jwt_decode from "jwt-decode";
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';
import { ThisReceiver } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url=environment.base_url;
  


  constructor(private http: HttpClient, 
    private router:Router, 
    private genericServices: GenericService,
    private messageService:MessageService,
    private toastService: ToastService,
    ) { }
  


  login(data: LoginForm) {
    return this.http.post(`${this.base_url}/login`, data).pipe(
      tap((res: any) => {
          localStorage.setItem('token', res.token)
      })
    );
  }

  logout(message:any = false, messageType:string = "info") {
    localStorage.clear();
    //this.rolActualService.clear();
    if(typeof(message)==="string" && message.trim() !== ""){
      switch(messageType){
        case "info":
          this.toastService.showInfo(message);
          break;
        case "success":
          this.toastService.showSuccess(message);
          break;
        case "error":
          this.toastService.showError(message);
          break;
        default:
          break;
      }
      
    }    
    this.router.navigate(['/iniciar-sesion']);
  }

  forgot(body: any){
    return this.genericServices.postGeneric('/recuperar', '', body)
  }

  nuevaPassword(body: any, token: any){   
    return this.genericServices.postGenericHeader('/nueva-password', '',body,token)
  }

  public obtenerToken(){
    let token = localStorage.getItem('token');
    return token
  }

  obtenerInformacionToken(){

    let token = localStorage.getItem('token');
    if(token === undefined || token === null){
      this.toastService.showError("Ocurrió un problema con la sesión, por favor ingrese nuevamente")
      localStorage.clear();
      // this.router.navigate(['/iniciar-sesion'])
    }else{
      try{
        return jwt_decode(token);
      }catch(err){
        this.toastService.showError("Ocurrió un problema con la sesión, por favor ingrese nuevamente")
        localStorage.clear();
        // this.router.navigate(['/iniciar-sesion'])
      }
    }
  }
}


