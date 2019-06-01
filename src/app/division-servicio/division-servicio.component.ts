import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeModel, NodeEvent } from 'ng2-tree';
import { TreeService } from '../service/tree.service';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../share-filter-state/ShareFilterServicioNode';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-division-servicio',
  templateUrl: './division-servicio.component.html'
})
export class DivisionServicioComponent implements OnInit {

  public tree: TreeModel;

  constructor(private treeService: TreeService,
              @Inject(SHARED_FILTER_SERVICIO_NODE) private observer: Observer<ShareFilterServicioNode>) { }
  ngOnInit() {
    this.treeService.getTreeServicio()
      .subscribe(response => {
        console.log();
        //   alert(response[0]);
        this.tree = response[0] as TreeModel;
      });
  }



  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    this.observer.next(new ShareFilterServicioNode(String(e.node.id)));
   // console.log(e.node.id + ", value = " + e.node.value);
  }
}
