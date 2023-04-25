import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titulo = 'Blank Page';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Obtener los datos de la ruta activa al momento en que se carga la página
    const data = this.activatedRoute.snapshot.firstChild?.data;
    this.titulo = data?.['titulo'] || 'Blank Page';
    
  }
}
