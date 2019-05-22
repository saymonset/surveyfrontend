import { Injectable } from "@angular/core";
@Injectable()
export class TreeModelTerritorialDTO {
  public children: TreeModelTerritorialDTO[] = [];
  public value: string;
}
