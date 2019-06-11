import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';

import { TreeModel, NodeEvent } from 'ng2-tree';
import { TreeService } from '../service/tree.service';
import { SHARED_FILTER_TERRITORIAL_NODE, ShareFilterTerritorialNode } from '../observables-observer-state/ShareFilterTerritorialNode';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-division-territorial',
  templateUrl: './division-territorial.component.html'
})
export class DivisionTerritorialComponent implements OnInit {

  public tree: TreeModel;
  public treeModelTerritorialDTO: TreeModelTerritorialDTO = new TreeModelTerritorialDTO();


  constructor(private treeService: TreeService,
              @Inject(SHARED_FILTER_TERRITORIAL_NODE) private observer: Observer<ShareFilterTerritorialNode>) { }

  ngOnInit() {
    this.treeService.getTreeTerritorial()
      .subscribe(response => {

        //   alert(response[0]);
        this.tree = response[0] as TreeModel;
        /*console.log(JSON.stringify(this.tree));*/
      });
  }



  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    this.treeModelTerritorialDTO.node = '' + e.node.id;
    this.treeModelTerritorialDTO.value = e.node.value;
    this.observer.next(new ShareFilterTerritorialNode(this.treeModelTerritorialDTO));
   // console.log(e.node.id + ", value = " + e.node.value);
  }

}
