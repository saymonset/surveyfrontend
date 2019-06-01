import { InjectionToken } from '@angular/core';

export class ShareFilterServicioNode {

  constructor(public node?: string) { }


}
export const SHARED_FILTER_SERVICIO_NODE = new InjectionToken('shared_filter_servicio_node');
