import { Injectable } from '@angular/core';
import { ChartCHARTDTO } from './ChartCHARTDTO';
import { TitleCHARTDTO } from './TitleCHARTDTO';
import { XaxisCHARTDTO } from './XaxisCHARTDTO';
import { YaxisCHARTDTO } from './YaxisCHARTDTO';
import { TooltipCHARTDTO } from './TooltipCHARTDTO';
import { PlotOptionsCHARTDTO } from './PlotOptionsCHARTDTO';
import {Serie0ChartDTO} from './Serie0ChartDTO';
@Injectable()
export class AlertCHARTDTO {
  public chart: ChartCHARTDTO;
  public title: TitleCHARTDTO;
  public xAxis: XaxisCHARTDTO;
  public yAxis: YaxisCHARTDTO;
  public tooltip: TooltipCHARTDTO;
  public plotOptions: PlotOptionsCHARTDTO;
  public series: Serie0ChartDTO[];
}
