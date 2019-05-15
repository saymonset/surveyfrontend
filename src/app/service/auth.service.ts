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
