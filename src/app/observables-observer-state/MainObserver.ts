import { InjectionToken } from '@angular/core';

export class MainObserver {

  constructor(public isLogged?: boolean) { }


}
export const MAIN_OBSERVER = new InjectionToken("mainObserver");
