import { Injectable } from '@angular/core';
@Injectable()
export class TreeModelServicioDTO {
  public children: TreeModelServicioDTO[] = [];
  public value: string;
}
