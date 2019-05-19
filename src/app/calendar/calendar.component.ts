import {Component, OnInit, ViewChild} from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
  constructor() { }

  ngOnInit() {
  }

}
