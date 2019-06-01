import { Injectable } from '@angular/core';
import {DataLabelsCHARTDTO} from './DataLabelsCHARTDTO';


@Injectable()
export class PieCHARTDTO {
  public  dataLabels: DataLabelsCHARTDTO;
  public startAngle: number;
  public endAngle: number;
  public  center: string[];
  public  size: string;
}
