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
export class CreateDataRepositry {
  baseUrl: string;
  datafillUrl = '';

  constructor(private http: HttpClient,
              @Inject(COMPLETE_OBSERVER) private completeUploadFile: Observer<CompleteObserver>) {
    this.baseUrl = AppSettings.API_ENDPOINT;
    this.datafillUrl = this.baseUrl + 'datafill/all';
  }

  send(formData) {
    return this.http.post<any>(`${this.datafillUrl}`, formData, {
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
