import { Component, OnInit  } from '@angular/core';
import { TokenService } from './service/token.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
