import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ToastService } from 'src/app/core/_services/toast.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public mostrarInformacion = true;
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;;

  // profesional
  profesional: any;
  profesionalForm: FormGroup = new FormGroup({});
  constructor(    
    private _authService: AuthService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    
    ) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
    
    this.profesional = this._authService.obtenerInformacionToken();
    this.profesionalForm = this.formBuilder.group({
      nombre: [this.profesional.nombre],
      apellido: [this.profesional.apellido],
      direccion: [this.profesional.direccion],
      email: [this.profesional.email],
      telefono: [this.profesional.telefono]
    });
  }



  changeTheme(theme:String){
    
   const url = `./assets/css/colors/${theme}.css`
   this.linkTheme?.setAttribute('href',url);
   localStorage.setItem('theme',url);
   this.checkCurrentTheme();
  }

  checkCurrentTheme(){

   
    this.links.forEach(elem =>{

      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');

      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`

      const currentTheme = this.linkTheme?.getAttribute('href');


      if ( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }

    })

  }



}
