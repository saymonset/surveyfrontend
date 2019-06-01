import { Injectable } from '@angular/core';
@Injectable()
export class FilterCHARTDTO {
  public territorialNode: string;
  public servicioNode: string;
  public dateBegin: Date;
  public dateEnd: Date;
}
