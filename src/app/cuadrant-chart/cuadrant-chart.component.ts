import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { ChartService } from '../service/chart.service';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';
import {isUndefined} from "util";

@Component({
  selector: 'app-cuadrant-chart',
  templateUrl: './cuadrant-chart.component.html',
  styleUrls: ['./cuadrant-chart.component.css']
})
export class CuadrantChartComponent implements OnInit {
  npsChartDTO: NpsChartDTO = new NpsChartDTO();
  options: object;
  filterCHARTDTO: FilterCHARTDTO = new  FilterCHARTDTO();
  chartCHARTDTO: ChartCHARTDTO = new ChartCHARTDTO();
  error: string;
  check:String;
  loading = true;
  Highcharts:  typeof Highcharts = Highcharts;
  chartOptions:  Highcharts.Options;

  constructor(private chartService: ChartService) {

    this.filterCHARTDTO = new FilterCHARTDTO();
    this.filterCHARTDTO.territorialNode = 'territorialNode';
    this.filterCHARTDTO.servicioNode = 'servicioNode';
    this.filterCHARTDTO.dateBegin = new Date;
    this.filterCHARTDTO.dateEnd = new Date;
    /*this.chartService.chart2(this.filterCHARTDTO).subscribe(
     (res) => this.chartCHARTDTO = res,
     (err) => this.error = err
     );*/

    this.chartService.chart(this.filterCHARTDTO).subscribe(data => {
      this.npsChartDTO = data;

        this.check = new String(this.npsChartDTO.series[0].data[0]);
        let splitted = this.check.split(",");
        let re = "'";
        let cad = splitted[0].replace(/re/gi,"");
        let num = splitted[1].replace(/re/gi,"");
      this.npsChartDTO.series[0].data[0] = [cad, parseFloat(num)];

        this.check = new String(this.npsChartDTO.series[0].data[1]);
         splitted = this.check.split(",");
         re = "'";
         cad = splitted[0].replace(/re/gi,"");
         num = splitted[1].replace(/re/gi,"");
        this.npsChartDTO.series[0].data[1] = [cad, parseFloat(num)];

        this.check = new String(this.npsChartDTO.series[0].data[2]);
        splitted = this.check.split(",");
        re = "'";
        cad = splitted[0].replace(/re/gi,"");
        num = splitted[1].replace(/re/gi,"");
        this.npsChartDTO.series[0].data[2] = [cad, parseFloat(num)];

      this.options = this.npsChartDTO;

     /* this.Highcharts = Highcharts;
      this.chartOptions = this.options;*/
      //  this.Highcharts: typeof Highcharts = Highcharts;
        this.chartOptions=  this.options;
        /*{
          series: [{
            data: [1, 2, 3],
            type: 'line'
          }]
        };*/
        this.loading = false;
    },
      () => { });

  }
  ngOnInit() {



  }
  /*Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]*/
 /* chartOptions: Highcharts.Options = {

    "chart": {
      "plotBackgroundColor": null,
      "plotBorderWidth": 0,
      "plotShadow": false
    },
    "title": {
      "text": "NPS - Net Promoter Score",
      "align": "center",
      "verticalAlign": "middle",
      "y": 40
    },
    "tooltip": {
      "pointFormat": "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    "plotOptions": {
      "pie": {
        "dataLabels": {
          "enabled": true,
          "distance": -50,
          "style": {
            "fontWeight": "bold",
            "color": "white"
          }
        },
        "startAngle": -90,
        "endAngle": 90,
        "center": [
          "50%",
          "75%"
        ],
        "size": "110%"
      }
    },
    "series": [
      {
        "type": "pie",
        "name": "",
        "innerSize": "50%",
        "data": [

          ['Detractores', 13.29],
          ['Promotores', 13],
          ['pasivos', 3.78]
        ]
      }
    ]
  };*/


  /*chartOptions: Highcharts.Options = {

    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'NPS - Net Promoter Score',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: '',
      innerSize: '50%',
      data: [

        ['Detractores', 13.29],
        ['Promotores', 13],
        ['pasivos', 3.78]

      ]
    }]
  };
*/
 /* chartOptions: Highcharts.Options = {

    title: {
      text: 'Por favor, evalúa el proceso de registro:'
    },

    subtitle: {
      text: ''
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },

    xAxis: {
      categories: ['De acuerdo', 'Desacuerdo', 'Neutro'],
      labels: {
        x: -10
      }
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: ''
      }
    },
    series: [{
      name: 'El proceso de registro fue rápido y eficiente.',
      data: [1, 2, 3],
      type: 'bar'
    },
      {
        name: 'El personal de la recepción fue muy amable.',
        data: [6, 4, 2],
        type: 'bar'
      },
      {
        name: 'La reserva contenía todos los servicios pedidos',
        data: [8, 4, 3],
        type: 'bar'
      }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          }
        }
      }]
    }
  };*/
  /*chartOptions: Highcharts.Options = {

    title: {
      text: 'Por favor, evalúa el proceso de registro:'
    },

    subtitle: {
      text: ''
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },

    xAxis: {
      categories: ['De acuerdo', 'Desacuerdo', 'Neutro'],
      labels: {
        x: -10
      }
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: ''
      }
    },
    series: [{
      name: 'El proceso de registro fue rápido y eficiente.',
      data: [1, 2, 3],
      type: 'column'
    },
      {
        name: 'El personal de la recepción fue muy amable.',
        data: [6, 4, 2],
        type: 'column'
      },
      {
        name: 'La reserva contenía todos los servicios pedidos',
        data: [8, 4, 3],
        type: 'column'
      }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          }
        }
      }]
    }
  };*/
}
