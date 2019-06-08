import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from '../dto/UserDTO';
import { AuthService } from '../service/auth.service';
import { LoginUsuario } from '../dto/login-usuario';
import { TokenService } from '../service/token.service';
import { MAIN_OBSERVER, MainObserver } from '../observables-observer-state/MainObserver';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: any = {};
  usuario: LoginUsuario;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg = '';

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router,
              @Inject(MAIN_OBSERVER) private observer: Observer<MainObserver>
              ) {

  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.email, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setCodeCompany(data.codeCompany);
        this.tokenService.setAuthorities(data.authorities);
        this.isLogged = true;
        this.observer.next(new MainObserver(this.isLogged));

        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      // window.location.reload();
      /**Login Si se llama nuevamente y con el token lleno.. se llama a
       * <app-home></app-home> */
     //  this.router.navigateByUrl('/main');
        /**Login Si se llama nuevamente y con el token lleno.. se llama a
         * <app-home></app-home> */
      },
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
      }
    );
  }



}
