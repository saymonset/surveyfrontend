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
       // console.log(JSON.stringify(response[0]));
       // console.log(JSON.parse(response));
        //this.tree = [{"value":"Programming languages by programming paradigm","children":[{"value":"Object-oriented programming","children":null},{"value":"Prototype-based programming","children":null}]},{"value":"Object-oriented programming","children":[{"value":"Java","children":null},{"value":"C++","children":null},{"value":"c#","children":null}]},{"value":"Java","children":null},{"value":"C++","children":null},{"value":"c#","children":null},{"value":"Prototype-based programming","children":[{"value":"JavaScript","children":null},{"value":"CoffeeScript","children":null},{"value":"Lua","children":null}]},{"value":"JavaScript","children":null},{"value":"CoffeeScript","children":null},{"value":"Lua","children":null}]
        //response as TreeModel;

        // JSON con distintos valores para utilizar en la demo
     //   var json = {'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3'};

        function isObject (value) {
          return value && typeof value === 'object' && value.constructor === Object;
        }
// Obteniendo todas las claves del JSON
        let json = response[0];
        for (var clave in json){

          console.log("La clave es " + isObject(clave) + " y el valor es " + isObject(json[clave]) );


        }

        this.tree = response[0] as TreeModel;
      });
  }

  public treeOriginal: TreeModel = {
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
