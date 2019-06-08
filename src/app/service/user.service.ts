import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDTO } from '../dto/UserDTO';
import { map } from 'rxjs/operators';
import {AppSettings} from '../dto/AppSettings';
import {UserRepository} from '../repository/user.repository';
@Injectable()
export class UserService {
  constructor(private http: HttpClient, private userRepository: UserRepository) {
  }

/*
  authenticate(userDTO: UserDTO): Observable<boolean> {
    return this.userRepository.authenticate(userDTO);
  }*/


  register(userDTO: UserDTO): Observable<UserDTO> {
    return this.userRepository.register(userDTO);
  }



}
