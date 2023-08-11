import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  newAPI= "https://newsapi.org/v2/top-headlines?country=in&apiKey=35589d0a7c9e4b98aa01fb91bb616954"

  newsHeadlines():Observable<any>{
    return this.http.get(this.newAPI)
  }
}
