import { Injectable } from '@angular/core';
import {PieCHARTDTO} from './PieCHARTDTO';
import {ColumnCHARTDTO} from './ColumnCHARTDTO';

@Injectable()
export class PlotOptionsCHARTDTO {
  public  pie: PieCHARTDTO;
  public column: ColumnCHARTDTO;
}
