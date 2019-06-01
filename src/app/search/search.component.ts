import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { IgxCalendarComponent, IgxDatePickerModule } from 'igniteui-angular';
import { SHARED_FILTER_STATE, ShareFilterState } from '../share-filter-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../share-filter-state/ShareFilterDateEnd';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
  constructor(@Inject(SHARED_FILTER_STATE) private observer: Observer<ShareFilterState>,
              @Inject(SHARED_FILTER_DATE_END) private observerDateEnd: Observer<ShareFilterDateEnd>) { }

  ngOnInit() {
  }
// date-picker-sample.component.ts


  public dateBegin: Date = new Date(Date.now());

  public dateEnd: Date = new Date(Date.now());

  clickDateBegin(newDate) {
    this.observer.next(new ShareFilterState(newDate));
  }

  clickDateEnd(date) {
    this.observerDateEnd.next(new ShareFilterDateEnd(date));
  }
}
