import { Component, OnInit, Inject } from '@angular/core';
import { MAIN_OBSERVER, MainObserver } from '../observables-observer-state/MainObserver';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLogged = false;
  constructor(private tokenService: TokenService,
               @Inject(MAIN_OBSERVER) private mainObservable: Observable<MainObserver>) {
    /**La primera vez en el login.. escuchamos si se loguea..**/
    mainObservable.subscribe((update) => {
      if (update.isLogged) {
        this.isLogged = true;
      }
    });
  }

  ngOnInit() {
    /**Una vez logueado.. controlamos por aca si esta login**/
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

}
