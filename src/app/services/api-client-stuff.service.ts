import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Gift } from '../Gift';

@Injectable({
  providedIn: 'root'
})
export class ApiClientStuffService {

  private baseUrl = 'http://localhost:5001';
  stuff$ = new BehaviorSubject<Array<{}>>([]);

  constructor(public http: HttpClient) { }

  getStuff(): Observable<any> {
     this.http.get(`${this.baseUrl}/getStuff`).subscribe((stuffs: Array<{}>) => {
       this.stuff$.next(stuffs);
     });
     return this.stuff$;
  }

  // delete(): Observable<any> {
  //   // do whatever
  //   ... this.stuff$.next();
  //   return this.stuff$;
  // }
}


