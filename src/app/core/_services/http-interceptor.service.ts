import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';
import { token_errors } from '../_consts/token_errors.const';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService,
    private authService: AuthService,
    private toastService: ToastService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    setTimeout(() => { 
      //console.log("Show loader: "+request.url)
      this.loaderService.setLoading(true, request.url); 
    }, 0)
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.obtenerToken()}`
      }
    });

    return next.handle(tokenizedRequest).pipe(
      catchError((errorObject: HttpErrorResponse) => {
        console.log(errorObject)
        let errorMsg = '';
        if (errorObject.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMsg = `Error: ${errorObject.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMsg = `Error Code: ${errorObject.status},  Message: ${errorObject.message}`;
        }

        //Errores de token
        if(errorObject?.error?.token_error_code !== undefined){
          if (errorObject.error.token_error_code === token_errors.TOKEN_NOT_FOUND) {
            this.toastService.showError(`Hubo un problema con su sesión, por favor inicie sesión nuevamente (${token_errors.TOKEN_NOT_FOUND})`);
            this.authService.logout();
          } else if (errorObject.error.token_error_code === token_errors.TOKEN_EMPTY) {
            this.toastService.showError(`Hubo un problema con su sesión, por favor inicie sesión nuevamente (${token_errors.TOKEN_EMPTY})`);
            this.authService.logout();
          }else if (errorObject.error.token_error_code === token_errors.TOKEN_EXPIRED) {
            this.toastService.showError(`Su sesión ha expirado, porfavor inicie sesión nuevamente (${token_errors.TOKEN_EXPIRED})`);
            this.authService.logout();
          }else if (errorObject.error.token_error_code === token_errors.TOKEN_ERR) {
            this.toastService.showError(`Hubo un problema con su sesión, por favor inicie sesión nuevamente (${token_errors.TOKEN_ERR})`);
            this.authService.logout();
          }else if (errorObject.error.token_error_code === token_errors.TOKEN_INVALID) {
            this.toastService.showError(`Su sesión es inválida, por favor inicie sesión nuevamente (${token_errors.TOKEN_INVALID})`);
            this.authService.logout();
          }else{
            this.toastService.showError(`Ocurrió un problema con su sesión, inicie sesión nuevamente (${errorObject.error.token_error_code})`);
            this.authService.logout();
          }
        }else{
          /*Otros errores
            errorObject.error.message -> (string) Mensaje en palabras humanas (Ej. No se pudo guardar el elemento)
            errorObject.error.error -> (string) Mensaje capturado de una Excepción/Error (Ej. Could not find file or directory)
          */

          if(typeof errorObject.error?.message === 'string' && errorObject.error?.message.trim() !== ""){
            this.toastService.showError(errorObject.error?.message)
          }else if(typeof errorObject.error?.error === 'string' && errorObject.error?.message.trim() !== ""){
            this.toastService.showError(`Ha ocurrido un error (${errorObject.error?.message})`)
          }else{
            this.toastService.showError('Ha ocurrido un error desconocido, intente nuevamente más tarde.')
          }
        }
        //Retorna el mismo error interceptado, por si se necesita usar en el suscribe
        return throwError(() => errorObject)
        //return throwError(error);
      }),
      finalize(() => {
        //console.log("API RESPONDIO " + request.url)
        setTimeout(() => { this.loaderService.setLoading(false, request.url); }, 0)
      }),
    );
  }

}