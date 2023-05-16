import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ToastService } from '../../../core/_services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nombreUsuario: string | undefined;
  correo: string | undefined;
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
    this.correo = `${this.userInfo.email} `;

  }

}
