import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendaService } from '../../../core/_services/agenda.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-pie',
  templateUrl: './grafica-pie.component.html',
  styleUrls: ['./grafica-pie.component.css']
})
export class GraficaPieComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Agendas Manuales' ], [ 'Agendas Online' ] ],
    datasets: [ {
      data: [ 300, 500]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  constructor(private agendaService: AgendaService) { }

  public actualizarGrafica(): void {
    this.agendaService.contar().subscribe((data) => {
      // Asigna los nuevos valores a la propiedad data de pieChartData
      this.pieChartData = {
        labels: [ 'Agendas Manuales', 'Agendas Online' ],
        datasets: [ {
          data: [ data.agendasOffline, data.agendasOnline ]
        } ]
      };
      // Actualiza la gráfica
      if (this.chart) {
        this.chart.update();
      }
    });
  }
  

  ngOnInit(): void {
    this.actualizarGrafica();
  }
  

}
