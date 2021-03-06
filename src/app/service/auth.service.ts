import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../dto/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../dto/jwt-model';
import { NuevoUsuario } from '../dto/nuevo-usuario';
import { AuthRepository } from '../repository/auth.repository';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
import {AppSettings} from '../dto/AppSettings';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authRepository: AuthRepository) {
  }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.authRepository.login(usuario);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.authRepository.registro(usuario);
  }
}

