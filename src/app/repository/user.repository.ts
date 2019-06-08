import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDTO } from '../dto/UserDTO';
import { map } from 'rxjs/operators';
import {AppSettings} from '../dto/AppSettings';
@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = AppSettings.API_ENDPOINT;
  }


  authenticate(userDTO: UserDTO): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'autenticate/user', userDTO, this.getOptions())
      .pipe(catchError((error: Response) =>
        throwError(`Authentication Failed. Network Error: ${error.statusText} (${error.status})`)))
      .pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }


  register(userDTO: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.baseUrl + 'users/sign-up',
      userDTO, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json, */*',
        'Authorization': `Bearer<${this.auth_token}>`
      })
    };
  }

}
