import { Injectable } from '@angular/core';
import {TemplatesDTO} from './TemplatesDTO';
import {CssClassesDTO} from './CssClassesDTO';
@Injectable()
export class SettingsDTO {
  public isCollapsedOnInit: boolean;
  public cssClasses: CssClassesDTO;
  public  templates: TemplatesDTO;
}
