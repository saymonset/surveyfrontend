import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NpsChartDTO } from '../dto/NpsChartDTO';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { ChartCHARTDTO } from '../dto/ChartCHARTDTO';
import { UserService } from '../service/user.service';
import {AppSettings} from '../dto/AppSettings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WidgetRepository {
  baseUrl: string;
  auth_token: string;
  constructor(private http: HttpClient, private  userService: UserService) {
    this.baseUrl = AppSettings.API_ENDPOINT;
  }

  chart(filterCHARTDTO: FilterCHARTDTO): Observable<NpsChartDTO> {
    return  this.http.post<NpsChartDTO>(this.baseUrl + 'search/nps', filterCHARTDTO);
  }





/*  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json, *!/!*',
        'Authorization': `${this.userService.auth_token}`
      })
    };
  }*/

}