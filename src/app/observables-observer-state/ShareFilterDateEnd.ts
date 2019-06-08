import { InjectionToken } from '@angular/core';

export class ShareFilterDateEnd {

  constructor(public dateEnd?: Date) { }


}
export const SHARED_FILTER_DATE_END = new InjectionToken("shared_filter_date_end");
