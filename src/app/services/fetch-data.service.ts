import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  fetchData(movieTitle: string): Observable<Object> {
    let url: string = `http://www.omdbapi.com/?apikey=77055c6a&t=` + movieTitle;
    return this.http.get<Object>(url);
  }
}
