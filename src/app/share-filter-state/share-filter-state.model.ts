import { InjectionToken } from '@angular/core';

export class ShareFilterState {

  constructor(public dateBegin?: Date) { }


}
export const SHARED_FILTER_STATE = new InjectionToken("shared_filter_state");
