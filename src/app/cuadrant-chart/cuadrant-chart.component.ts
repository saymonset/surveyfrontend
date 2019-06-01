import { Component, OnInit, Inject } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { ChartService } from '../service/chart.service';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';
import { SHARED_FILTER_STATE, ShareFilterState } from '../share-filter-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../share-filter-state/ShareFilterDateEnd';
import { SHARED_FILTER_TERRITORIAL_NODE, ShareFilterTerritorialNode } from '../share-filter-state/ShareFilterTerritorialNode';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../share-filter-state/ShareFilterServicioNode';
import { Observable } from 'rxjs';
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
  check: String;
  loading = true;
  Highcharts:  typeof Highcharts = Highcharts;
  chartOptions:  Highcharts.Options;

  constructor(private chartService: ChartService, @Inject(SHARED_FILTER_STATE) private stateEvents: Observable<ShareFilterState>
    , @Inject(SHARED_FILTER_DATE_END) private dateEndEvents: Observable<ShareFilterDateEnd>,
              @Inject(SHARED_FILTER_TERRITORIAL_NODE) private territorialNodeEvents: Observable<ShareFilterTerritorialNode>,
              @Inject(SHARED_FILTER_SERVICIO_NODE) private servicioNodeEvents: Observable<ShareFilterServicioNode>) {

    this.filterCHARTDTO = new FilterCHARTDTO();
    this.filterCHARTDTO.territorialNode = 'territorialNode';
    this.filterCHARTDTO.servicioNode = 'servicioNode';
    this.filterCHARTDTO.dateBegin = new Date;
    this.filterCHARTDTO.dateEnd = new Date;
    stateEvents.subscribe((update) => {
     console.log('ObservandodateBegin= ' + update.dateBegin);
      if (update.dateBegin != undefined) {
        this.filterCHARTDTO.dateBegin = update.dateBegin;
      }
    });

    dateEndEvents.subscribe((update) => {
       console.log('Observando dateEnd =' + update.dateEnd);
      if (update.dateEnd != undefined) {
        this.filterCHARTDTO.dateBegin = update.dateEnd;
      }
    });

    territorialNodeEvents.subscribe((update) => {
      console.log('Observando territorialNode =' + update.node);
      if (update.node != undefined) {
        this.filterCHARTDTO.territorialNode = update.node;
      }
    });

    servicioNodeEvents.subscribe((update) => {
      console.log('Observando servicioNodeEvents =' + update.node);
      if (update.node != undefined) {
        this.filterCHARTDTO.servicioNode = update.node;
      }
    });

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
        this.chartOptions=  this.options;
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
