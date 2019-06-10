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
  selector: 'app-nps-main-chart',
  templateUrl: './nps-main-chart.component.html',
  styleUrls: ['./nps-main-chart.component.css']
})
export class NpsMainChartComponent implements OnInit {
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
        this.chartService.nps(this.filterCHARTDTO).subscribe(data => {
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

  ngOnInit() {



  }


}
