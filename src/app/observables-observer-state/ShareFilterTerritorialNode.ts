import { InjectionToken } from '@angular/core';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
export class ShareFilterTerritorialNode {

  constructor(public treeModelTerritorialDTO?: TreeModelTerritorialDTO) { }


}
export const SHARED_FILTER_TERRITORIAL_NODE = new InjectionToken('shared_filter_territorial_node');
