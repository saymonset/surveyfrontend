import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
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

  constructor(private tokenService: TokenService, private router: Router) {

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
