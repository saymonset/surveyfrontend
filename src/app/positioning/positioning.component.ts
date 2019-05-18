import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TreeModel, NodeEvent } from 'ng2-tree';
import { TreeService } from '../service/tree.service';
@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.css']
})
export class PositioningComponent implements OnInit {

  public tree: TreeModel;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.treeService.getTrees()
      .subscribe(response => {
        this.tree = response[0] as TreeModel;
      });
  }



  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    console.log(e.node.id + ", value = " + e.node.value);
  }
}
