import { Injectable } from '@angular/core';
import {SettingsDTO} from './SettingsDTO';
@Injectable()
export class TreeModelTerritorialDTO {
  public children: TreeModelTerritorialDTO[] = [];
  public node: string;
  public value: string;
  public settings: SettingsDTO;
}
