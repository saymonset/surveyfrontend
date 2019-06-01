import { Injectable } from '@angular/core';
import {StyleCHARTDTO} from './StyleCHARTDTO';


@Injectable()
export class DataLabelsCHARTDTO {
  public enabled: boolean;
  public distance: number;
  public  style: StyleCHARTDTO;
}
