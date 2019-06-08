import { InjectionToken } from '@angular/core';

export class ShareFilterExecute {

  constructor(public isExecute?: string) { }


}
export const SHARED_FILTER_EXECUTE = new InjectionToken('shared_filter_execute');
