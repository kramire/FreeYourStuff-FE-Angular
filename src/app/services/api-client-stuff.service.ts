import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift } from '../Gift';

@Injectable({
  providedIn: 'root'
})
export class ApiClientStuffService {

  private baseUrl = 'http://localhost:5001';

  constructor(public http: HttpClient) { }

  getStuff(): Observable<any> {
     return this.http.get(`${this.baseUrl}/getStuff`)
  }
}


