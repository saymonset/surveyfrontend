import { InjectionToken } from '@angular/core';

export class CompleteObserver {

  constructor(public complet?: boolean) { }


}
export const COMPLETE_OBSERVER = new InjectionToken("completeUploadFile");
