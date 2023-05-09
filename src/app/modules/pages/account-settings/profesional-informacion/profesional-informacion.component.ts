import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ProfesionalService } from 'src/app/core/_services/profesional.service';
import { ToastService } from 'src/app/core/_services/toast.service';

@Component({
  selector: 'app-profesional-informacion',
  templateUrl: './profesional-informacion.component.html',
  styleUrls: ['./profesional-informacion.component.css']
})
export class ProfesionalInformacionComponent implements OnInit {
  @Output() cancelar = new EventEmitter();
  profesional: any;
  profesionalRut: any;
  profesionalForm: FormGroup = new FormGroup({});
  mostrarInformacion = true;
  informacionOriginal: any;

  constructor(
    private _authService: AuthService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private _profesionalService: ProfesionalService,
  ) {}

  ngOnInit(): void {
    this.profesional = this._authService.obtenerInformacionToken();
    
    this.profesionalForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      direccion: [''],
      email: [''],
      telefono: ['']
    });
  
    this._profesionalService.obtenerProfesionalPorRut(this.profesional.rut).subscribe(
      (response) => {
        this.profesionalRut = response.profesional;
  
        this.profesionalForm.patchValue({
          nombre: this.profesionalRut.nombre,
          apellido: this.profesionalRut.apellido,
          direccion: this.profesionalRut.direccion,
          email: this.profesionalRut.email,
          telefono: this.profesionalRut.telefono
        });
      },
      (error) => {
        console.error(error);
      }
    );
  
    this.informacionOriginal = { ...this.profesional };
  }
  

  toggleInformacion(): void {
    if (this.mostrarInformacion) {
      this.informacionOriginal = { ...this.profesional };
    }
    this.mostrarInformacion = !this.mostrarInformacion;
  }

  cancelarEdicion(): void {
    this.profesional = { ...this.informacionOriginal };
    this.profesionalForm.patchValue(this.informacionOriginal);
    this.mostrarInformacion = true;
    this.ngOnInit();
  }

  onRutInput(event: any) {
    let rut = event.target.value.replace(/[^\d]/g, ''); // Eliminar todo excepto los dígitos
    rut = rut.substring(0, rut.length - 1) + '-' + rut.substring(rut.length - 1); // Insertar guión antes del dígito verificador
    rut = rut.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.'); // Agregar puntos de separación de miles
    this.profesionalForm.patchValue({ rut: rut });
  }


  guardarCambios(): void {
    this.mostrarInformacion = true;

    const datosFormulario = this.profesionalForm.value;
    const hayCambios = JSON.stringify(this.informacionOriginal) !== JSON.stringify(datosFormulario);
    if (hayCambios) {
      this._profesionalService.actualizarInformacionProfesional(this.profesional.id, this.profesionalForm.value).subscribe(
        (response) => {
          this.toastService.showSuccess('La información del profesional se ha actualizado exitosamente');
          this.mostrarInformacion = true;
          this.ngOnInit();
        }
      );
  }
}
}
