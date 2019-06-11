import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-simple',
  templateUrl: './message-simple.component.html',
  styleUrls: ['./message-simple.component.css']
})
export class MessageSimpleComponent implements OnInit {
  @Input()
  pathTerritorio: string;

  @Input()
  pathServicio: string;

  constructor() { }

  ngOnInit() {
  }

}
