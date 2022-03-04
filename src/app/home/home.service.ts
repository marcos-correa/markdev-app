import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient:HttpClient
  ) { }
 

  getBook(): Observable<any>{
    let bookapi = "https://publishing-house-service.herokuapp.com/";
    return this.httpClient.get<any>(bookapi).pipe(map(res =>{
      return res.message
    }))
  }
}
