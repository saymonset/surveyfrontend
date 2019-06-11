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
import {SatisfactionGeneralCHARTDTO} from '../dto/SatisfactionGeneralCHARTDTO';
import { AlertCHARTDTO } from '../dto/AlertCHARTDTO';
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
    return  this.http.post<NpsChartDTO>(this.baseUrl + 'widget/nps', filterCHARTDTO);
  }

  nps(filterCHARTDTO: FilterCHARTDTO): Observable<NpsChartDTO> {
    return  this.http.post<NpsChartDTO>(this.baseUrl + 'widget/nps', filterCHARTDTO);
  }

  satisfactionGeneral(filterCHARTDTO: FilterCHARTDTO): Observable<SatisfactionGeneralCHARTDTO> {
    return  this.http.post<SatisfactionGeneralCHARTDTO>(this.baseUrl + 'widget/satisfactionGeneral', filterCHARTDTO);
  }

  alerts(filterCHARTDTO: FilterCHARTDTO): Observable<AlertCHARTDTO> {
    return  this.http.post<AlertCHARTDTO>(this.baseUrl + 'widget/alerts', filterCHARTDTO);
  }

}
