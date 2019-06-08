import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { SHARED_FILTER_STATE, ShareFilterState } from '../observables-observer-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../observables-observer-state/ShareFilterDateEnd';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-date-to',
  templateUrl: './date-to.component.html',
  styleUrls: ['./date-to.component.css']
})
export class DateToComponent implements OnInit {

  constructor(
    @Inject(SHARED_FILTER_DATE_END) private observerDateEnd: Observer<ShareFilterDateEnd>) { }

  ngOnInit() {

  }


  public dateEnd: Date = new Date(Date.now());



  clickDateEnd(date) {
    //  console.log('Excelente ' + date);
    this.observerDateEnd.next(new ShareFilterDateEnd(date));
  }

}
