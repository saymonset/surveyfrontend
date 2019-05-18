import { Injectable } from "@angular/core";
@Injectable()
export class TreeModelDTO {
  public children: TreeModelDTO[] = [];
  public value: string;
}
