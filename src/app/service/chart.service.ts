import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';

import { map } from 'rxjs/operators';
// import { Response } from '@angular/http';
// import { TokenDTO } from '../dto/TokenDTO';

const PROTOCOL = 'http';
const PORT = 8443;
@Injectable()
export class ChartService {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  chart(filterCHARTDTO: FilterCHARTDTO): Observable<NpsChartDTO> {
    // return  this.http.get<NpsChartDTO>(this.apiUrlSent + 'territorialNode=' + territorialNode + '&servicioNode=' + servicioNode + '&dateBegin=' + dateEnd + '&dateBegin=' + dateEnd);
    return  this.http.post<NpsChartDTO>(this.baseUrl + 'chart/nps', filterCHARTDTO);
  }

  chart2(filterCHARTDTO: FilterCHARTDTO): Observable<ChartCHARTDTO> {
    // return  this.http.get<NpsChartDTO>(this.apiUrlSent + 'territorialNode=' + territorialNode + '&servicioNode=' + servicioNode + '&dateBegin=' + dateEnd + '&dateBegin=' + dateEnd);
    return  this.http.get<ChartCHARTDTO>(this.baseUrl + 'chart/nps?' + 'territorialNode=' + filterCHARTDTO.territorialNode);
  }
  /*getTreeTerritorial(): Observable<TreeModelTerritorialDTO[]> {
    return this.http.get<TreeModelTerritorialDTO[]>(this.baseUrl + "tree/territorial",
      this.getOptions());
  }*/






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
