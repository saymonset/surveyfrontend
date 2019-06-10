import { Injectable } from '@angular/core';
import {ChartCHARTDTO} from './ChartCHARTDTO';
import { TitleCHARTDTO } from './TitleCHARTDTO';
import {TooltipCHARTDTO} from './TooltipCHARTDTO';
import {PlotOptionsCHARTDTO} from './PlotOptionsCHARTDTO';
import {Serie0ChartDTO} from './Serie0ChartDTO';

@Injectable()
export class SatisfactionGeneralCHARTDTO {

  public title: TitleCHARTDTO;
  public tooltip: TooltipCHARTDTO;
  public plotOptions: PlotOptionsCHARTDTO;
  public series: Serie0ChartDTO[];
}

