import { Injectable } from '@angular/core';
import { TitleCHARTDTO } from './TitleCHARTDTO';
@Injectable()
export class YaxisCHARTDTO {
  public  categories: Object[];
  public min: number;
  public title: TitleCHARTDTO;
}
