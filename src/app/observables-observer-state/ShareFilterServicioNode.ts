import { InjectionToken } from '@angular/core';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';
export class ShareFilterServicioNode {

  constructor(public treeModelServicioDTO?: TreeModelServicioDTO) { }


}
export const SHARED_FILTER_SERVICIO_NODE = new InjectionToken('shared_filter_servicio_node');
