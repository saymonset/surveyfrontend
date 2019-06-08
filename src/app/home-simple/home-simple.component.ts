import { Component, OnInit , Inject} from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';
import {COMPLETE_OBSERVER, CompleteObserver} from '../observables-observer-state/completeObserver';
import { Observable } from 'rxjs';
import { SendSurveyService } from '../service/survey.service';
@Component({
  selector: 'app-home-simple',
  templateUrl: './home-simple.component.html',
  styleUrls: ['./home-simple.component.css']
})
export class HomeSimpleComponent implements OnInit {
  isLogin = false;
  roles: string[];
  authority: string;
  isSendSurvey = false;
  loading: boolean;
  info: any = {};
  isExistSurveyBd: boolean = false;
  constructor(private tokenService: TokenService, private router: Router, private loaderService: LoaderService,
              @Inject(COMPLETE_OBSERVER) private completeUploadFile: Observable<CompleteObserver>,
  private sendSurveyService: SendSurveyService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });


    if (sendSurveyService.existSurveyBd(tokenService.getCodeCompany())) {
      this.isExistSurveyBd = true;
    }


    completeUploadFile.subscribe((update) => {
      if (update.complet) {
        this.isSendSurvey = false;
      }
    });
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.info = {
        nombreUsuario: this.tokenService.getUserName(),
      };
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  sendSurvey(): void {
   this.isSendSurvey = true;
   this.loading = false;
  }



}
