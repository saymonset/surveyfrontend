import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TreeModelDTO } from '../dto/TreeModelDTO';
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

  getTrees(): Observable<TreeModelDTO[]> {
    return this.http.get<TreeModelDTO[]>(this.baseUrl + "positioning/all");
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}
