import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-cuadrant-chart',
  templateUrl: './cuadrant-chart.component.html',
  styleUrls: ['./cuadrant-chart.component.css']
})
export class CuadrantChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

}
