import { Injectable } from '@angular/core';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartRepository } from '../repository/chart.repository';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';

@Injectable()
export class ChartService {
  npsChartDTO: NpsChartDTO = new NpsChartDTO();
  check: String;
  loading = true;
  options: object;
  Highcharts:  typeof Highcharts = Highcharts;
  chartOptions:  Highcharts.Options;
  constructor( private chartRepository: ChartRepository) {
  }



  chart(filterCHARTDTO: FilterCHARTDTO):  Observable<NpsChartDTO>{
    return this.chartRepository.chart(filterCHARTDTO);
  }






}
