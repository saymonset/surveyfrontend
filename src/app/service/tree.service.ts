import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';
import {AppSettings} from '../dto/AppSettings';
/*const PROTOCOL = 'http';
const PORT = 8443;*/
@Injectable()
export class TreeService {
  baseUrl: string;
  constructor(private http: HttpClient, private userService: UserService) {
    this.baseUrl = AppSettings.API_ENDPOINT;
  }

  getTreeTerritorial(): Observable<TreeModelTerritorialDTO[]> {
    return this.http.get<TreeModelTerritorialDTO[]>(this.baseUrl + "tree/territorial",
      this.getOptions());
  }

  getTreeServicio(): Observable<TreeModelServicioDTO[]> {
    return this.http.get<TreeModelServicioDTO[]>(this.baseUrl + "tree/servicio",
      this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.userService.auth_token}>`
      })
    }
  }
}

