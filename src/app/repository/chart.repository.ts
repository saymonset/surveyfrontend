import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';

import { map } from 'rxjs/operators';


const PROTOCOL = 'http';
const PORT = 8443;
@Injectable()
export class ChartRepository {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  chart(filterCHARTDTO: FilterCHARTDTO): Observable<NpsChartDTO> {
    return  this.http.post<NpsChartDTO>(this.baseUrl + 'search/nps', filterCHARTDTO);
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
    };
  }

}
