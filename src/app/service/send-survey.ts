import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SurveyDTO } from '../dto/SurveyDTO';
@Injectable()
export class SendSurveyService {

  apiUrl = 'http://localhost:8443/survey/send';
  apiUrlSent = "http://localhost:8443/survey/searchSurvey?";
  apiUrlSentResult = "http://localhost:8443/survey/sent/result";
  constructor(private http: HttpClient) { }

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
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  sentVerify(codigoEncuesta, email, lang, codeCompany): Observable<SurveyDTO> {
    return  this.http.get<SurveyDTO>(this.apiUrlSent + "codigoEncuesta="+codigoEncuesta+"&email="+email+"&lang=" + lang + "&codeCompany=" + codeCompany);
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
