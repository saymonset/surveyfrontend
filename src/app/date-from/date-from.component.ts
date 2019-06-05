import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { SHARED_FILTER_STATE, ShareFilterState } from '../share-filter-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../share-filter-state/ShareFilterDateEnd';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-date-from',
  templateUrl: './date-from.component.html',
  styleUrls: ['./date-from.component.css']
})
export class DateFromComponent implements OnInit {



  constructor(@Inject(SHARED_FILTER_STATE) private observer: Observer<ShareFilterState>,
              @Inject(SHARED_FILTER_DATE_END) private observerDateEnd: Observer<ShareFilterDateEnd>) { }

  ngOnInit() {

  }

  public dateBegin: Date = new Date(Date.now());
  clickDateBegin(newDate) {
    this.observer.next(new ShareFilterState(newDate));

  }
}
