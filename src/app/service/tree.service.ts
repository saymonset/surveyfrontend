import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';

import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 8443;
@Injectable()
export class TreeService {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
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
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}

