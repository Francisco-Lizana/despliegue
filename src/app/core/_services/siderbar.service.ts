import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

  menu: any []  =[
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu : [
        {titulo:'Main',url :'/'},
        {titulo:'grafica',url :'/grafica1'},
        {titulo:'inicio',url :'/inicio'},
      ]
    },
  ];

  constructor() { }
}
