import {Component, OnInit, ViewChild} from '@angular/core';
import { IgxCalendarComponent, IgxDatePickerModule } from 'igniteui-angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
  constructor() { }

  ngOnInit() {
  }
// date-picker-sample.component.ts


  public date: Date = new Date(Date.now());

}
