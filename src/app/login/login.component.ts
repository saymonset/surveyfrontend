import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from '../dto/UserDTO';
import { AuthService } from '../service/auth.service';
import { LoginUsuario } from '../dto/login-usuario';
import { TokenService } from '../service/token.service';


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

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);

        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
       window.location.reload();
       // this.router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
      }
    );
  }


  /*

    userDTO: UserDTO = new UserDTO();
    public errorMessage: string;
    constructor(private auth: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    authenticate(form: NgForm) {
      if (form.valid) {
  // perform authentication
        this.auth.authenticate(this.userDTO)
          .subscribe(response => {
            if (response) {
              this.router.navigateByUrl('/head');
            }
            this.errorMessage = 'Authentication Failed';
          });
      } else {
        this.errorMessage = 'Form Data Invalid';
      }
    }
      resetForm() {
            this.userDTO.clear();
       }
  */

}
