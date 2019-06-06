import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../dto/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../dto/jwt-model';
import { NuevoUsuario } from '../dto/nuevo-usuario';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
import {AppSettings} from '../dto/AppSettings ';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = AppSettings.API_ENDPOINT;
  }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.baseUrl + 'api/auth/login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'api/auth/nuevo', usuario, cabecera);
  }
}

