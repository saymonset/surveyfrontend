import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-simple',
  templateUrl: './home-simple.component.html',
  styleUrls: ['./home-simple.component.css']
})
export class HomeSimpleComponent implements OnInit {
  isLogin = false;
  roles: string[];
  authority: string;
  info: any = {};
  constructor(private tokenService: TokenService, private router: Router) { }
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
    // this.router.navigate(['/login']);
  }


}
