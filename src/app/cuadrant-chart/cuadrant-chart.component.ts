import { Component, OnInit, Inject } from '@angular/core';
import { TokenService } from '../service/token.service';
import { WidgetRepository } from '../repository/widget.repository';
import { WidgetService } from '../service/widget.service';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';
import { SHARED_FILTER_STATE, ShareFilterState } from '../observables-observer-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../observables-observer-state/ShareFilterDateEnd';
import { SHARED_FILTER_TERRITORIAL_NODE, ShareFilterTerritorialNode } from '../observables-observer-state/ShareFilterTerritorialNode';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../observables-observer-state/ShareFilterServicioNode';
import { SHARED_FILTER_EXECUTE, ShareFilterExecute } from '../observables-observer-state/ShareFilterExecute';
import { Observable, Observer } from 'rxjs';
import {isUndefined} from 'util';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-cuadrant-chart',
  templateUrl: './cuadrant-chart.component.html',
  styleUrls: ['./cuadrant-chart.component.css']
})
export class CuadrantChartComponent implements OnInit {
  Highcharts:  typeof Highcharts = Highcharts;
  chartOptions:  Highcharts.Options;
  npsChartDTO: NpsChartDTO = new NpsChartDTO();
  filterCHARTDTO: FilterCHARTDTO = new  FilterCHARTDTO();
  chartCHARTDTO: ChartCHARTDTO = new ChartCHARTDTO();
  error: string;
  check: String;
  loading = true;
  options: object;

  constructor(private chartRepository: WidgetRepository, private chartService: WidgetService, @Inject(SHARED_FILTER_STATE) private stateEvents: Observable<ShareFilterState>
    , @Inject(SHARED_FILTER_DATE_END) private dateEndEvents: Observable<ShareFilterDateEnd>,
              @Inject(SHARED_FILTER_TERRITORIAL_NODE) private territorialNodeEvents: Observable<ShareFilterTerritorialNode>,
              @Inject(SHARED_FILTER_SERVICIO_NODE) private servicioNodeEvents: Observable<ShareFilterServicioNode>,
              @Inject(SHARED_FILTER_EXECUTE) private executeEvents: Observable<ShareFilterExecute>,
              @Inject(SHARED_FILTER_EXECUTE) private executeObserverEvents: Observer<ShareFilterExecute>,
              private tokenService: TokenService) {


    stateEvents.subscribe((update) => {

      this.filterCHARTDTO.codeCompany = tokenService.getCodeCompany();

      if (update.dateBegin != undefined) {
       // console.log('ObservandodateBegin= ' + update.dateBegin);
        this.filterCHARTDTO.dateBegin = update.dateBegin;
        this.executeObserverEvents.next(new ShareFilterExecute('1'));
      }
    });

    dateEndEvents.subscribe((update) => {
      // console.log('Observando dateEnd =' + update.dateEnd);
      if (update.dateEnd != undefined) {
        this.filterCHARTDTO.dateEnd = update.dateEnd;
        this.executeObserverEvents.next(new ShareFilterExecute('2'));
      }
    });

    territorialNodeEvents.subscribe((update) => {
    //  console.log('Observando territorialNode =' + update.node);
      if (update.node != undefined) {
        this.filterCHARTDTO.territorialNode = update.node;
        this.executeObserverEvents.next(new ShareFilterExecute('3'));
      }
    });

    servicioNodeEvents.subscribe((update) => {
     // console.log('Observando servicioNodeEvents =' + update.node);
      if (update.node != undefined) {
        this.filterCHARTDTO.servicioNode = update.node;
        this.executeObserverEvents.next(new ShareFilterExecute('4'));
      }
    });


    executeEvents.subscribe((update) => {
      if (update.isExecute === '1' || update.isExecute === '2'|| update.isExecute === '3'|| update.isExecute === '4') {
        console.log(' true ejecuta isExecute =' + update.isExecute);
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
       this.executeObserverEvents.next(new ShareFilterExecute('0'));
      }
    });


  }
  /* this.chartRepository.chart(this.filterCHARTDTO).subscribe(data => {
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

   // this.chartOptions = this.chartService.chart(this.filterCHARTDTO) ;
    console.log('saymons = ' + this.chartOptions);

  }*/
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
