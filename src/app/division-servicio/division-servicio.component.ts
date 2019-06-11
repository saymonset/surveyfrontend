import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeModel, NodeEvent } from 'ng2-tree';
import { TreeService } from '../service/tree.service';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../observables-observer-state/ShareFilterServicioNode';
import { Observer } from 'rxjs';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';
@Component({
  selector: 'app-division-servicio',
  templateUrl: './division-servicio.component.html'
})
export class DivisionServicioComponent implements OnInit {

  public tree: TreeModel;
  public treeModelServicioDTO: TreeModelServicioDTO = new TreeModelServicioDTO();
  constructor(private treeService: TreeService,
              @Inject(SHARED_FILTER_SERVICIO_NODE) private observer: Observer<ShareFilterServicioNode>) { }
  ngOnInit() {
    this.treeService.getTreeServicio()
      .subscribe(response => {
      //  console.log();
        //   alert(response[0]);
        this.tree = response[0] as TreeModel;
      });
  }



  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    this.treeModelServicioDTO.node = '' + e.node.id;
    this.treeModelServicioDTO.value = e.node.value;
    this.observer.next(new ShareFilterServicioNode(this.treeModelServicioDTO));

  }
}
