import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  protected myAppUrl = environment.base_url;

  constructor(private httpClient: HttpClient) { }



  public getGeneric(controller: string, options: any): Observable<any>{
    //// console.log("Ruta Get", this.myAppUrl + controller + options);
    
    return this.httpClient.get<any>(this.myAppUrl + controller + options);
  }

  public getOneGeneric(controller: string ,id: any, options: any): Observable<any>{
    console.log("Ruta Get", this.myAppUrl + controller + id + options);

    return this.httpClient.get<any>(this.myAppUrl + controller + id + options);
  }

  public getOneGenericIdInbetween(controllerLeft: string, controllerRight: string ,id: any, options: any): Observable<any>{
    console.log("Ruta Get", this.myAppUrl + controllerLeft + id + controllerRight + options);

    return this.httpClient.get<any>(this.myAppUrl + controllerLeft + id + controllerRight + options);
  }

  public postGeneric(controller: string, options: any, body:any): Observable<any>{
    //// console.log("Ruta post", this.myAppUrl + controller + options + body);

    
    return this.httpClient.post<any>(this.myAppUrl + controller + options, body) ;
  }

  public postGenericHeader(controller: string, options: any, body:any, token:any): Observable<any>{

    let httpOptions = {
      headers: new HttpHeaders({
        token :'Bearer '+token,
      }),
      body: body,
    };

    //// console.log("Ruta post", this.myAppUrl + controller + options + body);

    
    return this.httpClient.post<any>(this.myAppUrl + controller + options, body , httpOptions) ;
  }



  public deleteGeneric(controller: string, id: any ,options: any): Observable<any>{
    //console.log("Ruta post", this.myAppUrl + controller + options + body);

    
    return this.httpClient.delete<any>(this.myAppUrl + controller + id + options) ;
  }

  public putGeneric(controller: string,id: any ,options: any, body:any){
    return this.httpClient.put<any>(this.myAppUrl + controller + id + options, body) ;
  }

  public patchGeneric(controller: string,id: any ,options: any, body:any){
    let headers:any = new HttpHeaders();
    
    headers = headers.append('Content-Type', 'multipart/form-data')
    return this.httpClient.patch<any>(this.myAppUrl + controller + id + options, body, headers);
  }

  public postGenericFiles(controller: string, options: any, body:any): Observable<any>{
    //// console.log("Ruta post", this.myAppUrl + controller + options + body);

    let headers:any = new HttpHeaders();
    
    headers = headers.append('Content-Type', 'multipart/form-data')
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;'
       
      })
    };
    return this.httpClient.post<any>(this.myAppUrl + controller + options, body, headers) ;
  }

  public patchIdInbetween(controllerLeft: string, controllerRight: string,id: any ,options: any, body: any){
    return this.httpClient.patch<any>(this.myAppUrl + controllerLeft + id + controllerRight + options, body);
  }

  public translate (){
    return this.httpClient.get<any>('assets/es.json');
  }


}
