import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SurveyDTO } from '../dto/SurveyDTO';
import {AppSettings} from '../dto/AppSettings';
import {COMPLETE_OBSERVER, CompleteObserver} from '../observables-observer-state/completeObserver';
import {  Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendSurveyRepositry {
  baseUrl: string;
  apiUrl = '';
  apiUrlSent = '';
  apiUrlSentResult = '';
  existSurveyBd = '';
  surveyDTO: SurveyDTO = new SurveyDTO();
  constructor(private http: HttpClient,
              @Inject(COMPLETE_OBSERVER) private completeUploadFile: Observer<CompleteObserver>) {
    this.baseUrl = AppSettings.API_ENDPOINT;
    this.apiUrl = this.baseUrl + 'survey/send';
    this.apiUrlSent = this.baseUrl + 'survey/openAndSendToClientSurvey';
    this.apiUrlSentResult = this.baseUrl + 'survey/sent/result';
    this.existSurveyBd = this.baseUrl + 'survey/existSurveyBd?';
  }

  send(formData) {
    return this.http.post<any>(`${this.apiUrl}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
        switch (event.type) {

          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total);
            return { status: 'progress', message: progress };

          case HttpEventType.Response:
            this.completeUploadFile.next(new CompleteObserver(true));
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }


  metodoexistSurveyBd(codeCompany): Observable<boolean> {
    return  this.http.get<boolean>(this.existSurveyBd + "codeCompany=" + codeCompany);
  }

 /* sentVerify(codigoEncuesta, email, lang, codeCompany): Observable<SurveyDTO> {
    return  this.http.get<SurveyDTO>(this.apiUrlSent + "codigoEncuesta="+codigoEncuesta+"&email="+email+"&lang=" + lang + "&codeCompany=" + codeCompany);
  }*/

  sentVerify(codigoEncuesta, email, lang, codeCompany): Observable<SurveyDTO> {
    this.surveyDTO = new SurveyDTO();
    this.surveyDTO.codigoEncuesta = codigoEncuesta;
    this.surveyDTO.email = email;
    this.surveyDTO.lang = lang;
    this.surveyDTO.codeCompany = codeCompany;
  //  console.log(codigoEncuesta + ' = codigo encesta saymopn, this.surveyDTO.email ='+this.surveyDTO.email+', this.surveyDTO.codeCompany  = '+this.surveyDTO.codeCompany );
    // return  this.http.get<SurveyDTO>(this.apiUrlSent + "codigoEncuesta="+codigoEncuesta+"&email="+email+"&lang=" + lang + "&codeCompany=" + codeCompany);
    return  this.http.post<SurveyDTO>(this.apiUrlSent , this.surveyDTO);
  }

  sentResult(objecto: object): Observable<SurveyDTO> {
    return  this.http.post<SurveyDTO>(this.apiUrlSentResult,objecto );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {

    switch (event.type) {

      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
        return this.apiResponse(event);

      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}
