import { Component, OnInit } from '@angular/core';
import { SiderbarService } from 'src/app/core/_services/siderbar.service';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ToastService } from '../../../../core/_services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: unknown;
  nombreUsuario: string | undefined;
  userInfo: any;

  constructor(
    private readonly router: Router,
    private _authService: AuthService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.nombreUsuar();
  }

  
  onLogout(): void {
    this._authService.logout();
    this.router.navigate(['/login']);
  }



  nombreUsuar(): void {
    this.userInfo = this._authService.obtenerInformacionToken();
    this.nombreUsuario = `${this.userInfo.nombre} ${this.userInfo.apellido}`;

  }
  
  

}
