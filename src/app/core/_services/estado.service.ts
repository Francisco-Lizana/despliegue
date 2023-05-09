import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  base_url = environment.base_url;
  constructor(private http: HttpClient) { }


 
}

