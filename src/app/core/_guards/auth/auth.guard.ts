import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';
import { ToastService } from '../../_services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, 
    private router: Router,
    private injector:Injector) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;

    return this.checkUserLogin(route, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    let toastService = this.injector.get(ToastService)
    let isLogged = this.authService.isLogged();
    if(isLogged === true){
      return true;
    }else{
      toastService.showError("Debe iniciar sesión primero", "Inicio de sesión requerido")
      /* Logout para limpiar local storage por si acaso */
      this.authService.logout();
      return false;
    }
  }
  
}
