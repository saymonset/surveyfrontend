import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserDTO } from '../dto/UserDTO';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { TokenDTO } from '../dto/TokenDTO';

const PROTOCOL = 'http';
const PORT = 8443;
@Injectable()
export class UserService {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }


  authenticate(userDTO: UserDTO): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'users/authenticate', userDTO, this.getOptions2()).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      console.log('Token saymon = ' + this.auth_token)
      return response.success;
    }));
  }


  register(userDTO: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.baseUrl + 'users/sign-up',
      userDTO, this.getOptions());
  }




  private getOptions2() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json, */*'
      })
    };
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.auth_token}>`
      })
    }
  }

}
