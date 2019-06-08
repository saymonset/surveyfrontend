import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { SendSurveyService } from '../service/survey.service';
import {isNullOrUndefined} from "util";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin = false;
  roles: string[];
  authority: string;
  info: any = {};
  isExistSurveyBd: boolean = false;
  isRoot: boolean = false;

  constructor(private tokenService: TokenService, private router: Router,
              private sendSurveyService: SendSurveyService) {
    /**Existe ya data cargada para habilitar el boton de mandar encestas*/
    if (sendSurveyService.existSurveyBd(tokenService.getCodeCompany())) {
      this.isExistSurveyBd = true;
      sendSurveyService.setExistSurveyBd(this.isExistSurveyBd);
    }
  }
  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.info = {
        nombreUsuario: this.tokenService.getUserName(),
      };
      this.isRoot = (this.tokenService.getCodeCompany() === isNullOrUndefined || this.tokenService.getCodeCompany() ===  '');
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



  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    window.location.reload();
    //this.router.navigateByUrl('/login');
    // this.router.navigate(['/login']);
  }
  homesimple(): void {
    this.router.navigateByUrl('/homeSimple');
  }


}
