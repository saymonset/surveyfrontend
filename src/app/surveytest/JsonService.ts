import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JsonService {
    private subject = new Subject<any>();

    sendJson(json: string) {
        this.subject.next({ text: json });
    }

    clearJsons() {
        this.subject.next();
    }

    getJson(): Observable<any> {
        return this.subject.asObservable();
    }
}
