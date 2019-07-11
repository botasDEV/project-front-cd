import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  private endpoint = 'https://project-cd-rest.herokuapp.com/api/user/register';

  constructor(
    private http: HttpClient
  ) {}

  addClient(data: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With' :'XMLHttpRequest',
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(httpOptions);

    return this.http.post<any>(this.endpoint, data, httpOptions);

  }
}

