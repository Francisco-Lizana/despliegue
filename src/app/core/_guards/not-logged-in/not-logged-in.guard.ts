import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuard implements CanActivate {
  constructor(public authService: AuthService, 
    private router:Router
    ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLogged() === false){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
