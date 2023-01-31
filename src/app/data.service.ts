import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {lastValueFrom, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData():Observable<any> {
    return this.http.get('/assets/json/data.json');
  }
}
