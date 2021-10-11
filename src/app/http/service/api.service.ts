import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface PostType { 
  userId: number, 
  id: number, 
  title: string, 
  body: string 
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getData(): Observable<PostType[]> {
    return this.http.get<PostType[]>(this.url + 'posts');
  }
}
