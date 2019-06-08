import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';
import {AppSettings} from '../dto/AppSettings';
import { TokenService } from '../service/token.service';
@Injectable({
  providedIn: 'root'
})
export class TreeRepository {
  baseUrl: string;
  constructor(private http: HttpClient, private userService: UserService, private tokenService: TokenService) {
    this.baseUrl = AppSettings.API_ENDPOINT;
  }

  getTreeTerritorial(): Observable<TreeModelTerritorialDTO[]> {
    return this.http.get<TreeModelTerritorialDTO[]>(this.baseUrl + 'tree/territorial?codeCompany=' + this.tokenService.getCodeCompany());
  }

  getTreeServicio(): Observable<TreeModelServicioDTO[]> {
    return this.http.get<TreeModelServicioDTO[]>(this.baseUrl + 'tree/servicio?codeCompany=' + this.tokenService.getCodeCompany());
  }

}

