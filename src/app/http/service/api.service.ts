import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface userDataType { 
  id ?: number,
  fullname : string,
  username : string,
  email : string,
  password : string
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'http://localhost:80/codeigniter/api/';

  constructor(private http: HttpClient) { }

  getData(id ?: number): Observable<userDataType[]> {
    
    return this.http.get<userDataType[]>(`${this.url} ${id ? 'get/'+id : ''}`);
  }

  postData(data : userDataType) : Observable<userDataType> {
    return this.http.post<userDataType>(this.url + 'create', data);
  }
}
