import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { SHARED_FILTER_STATE, ShareFilterState } from '../observables-observer-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../observables-observer-state/ShareFilterDateEnd';
/*import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';*/
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


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
  //  console.log('Excelente ' + date);
    this.observerDateEnd.next(new ShareFilterDateEnd(date));
  }
}
