import { Injectable } from '@angular/core';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { WidgetRepository } from '../repository/widget.repository';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';

@Injectable()
export class WidgetService {
  npsChartDTO: NpsChartDTO = new NpsChartDTO();
  check: String;
  loading = true;
  options: object;
  Highcharts:  typeof Highcharts = Highcharts;
  chartOptions:  Highcharts.Options;
  constructor( private widgetRepository: WidgetRepository) {
  }



  chart(filterCHARTDTO: FilterCHARTDTO):  Observable<NpsChartDTO>{
    return this.widgetRepository.chart(filterCHARTDTO);
  }






}
