import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<any> {
    return this
            .http
              .get("http://localhost:4000/getData")
            .pipe(
              map(res => res)
          );
      }
}
