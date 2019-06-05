import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../dto/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../dto/jwt-model';
import { NuevoUsuario } from '../dto/nuevo-usuario';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8443/api/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuario, cabecera);
  }
}

/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserDTO } from '../dto/UserDTO';
@Injectable()
export class AuthService {


  constructor(private userService: UserService) {}


  authenticate(userDTO: UserDTO): Observable<boolean> {
    return this.userService.authenticate(userDTO);
  }
  get authenticated(): boolean {
    return this.userService.auth_token != null;
  }
  clear() {
    this.userService.auth_token = null;
  }
}
*/
