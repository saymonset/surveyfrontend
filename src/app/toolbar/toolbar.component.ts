import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { SHARED_FILTER_STATE, ShareFilterState } from '../share-filter-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../share-filter-state/ShareFilterDateEnd';
/*import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';*/
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {



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
