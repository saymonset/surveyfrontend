import { Component, OnInit } from '@angular/core';
import { TreeModel, NodeEvent } from 'ng2-tree';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.css']
})
export class PositioningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };

  // 3 - print caught event to the console
  public logEvent(e: NodeEvent): void {
    console.log(e);
  }
}
