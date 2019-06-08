import { InjectionToken } from '@angular/core';

export class ShareFilterTerritorialNode {

  constructor(public node?: string) { }


}
export const SHARED_FILTER_TERRITORIAL_NODE = new InjectionToken('shared_filter_territorial_node');
