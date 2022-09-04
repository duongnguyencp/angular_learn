import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000/getAll';

  constructor(public http: HttpClient) {}

  getAllData(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }
  postData(data: User): Observable<User> {
    return this.http.post<User>(this.baseURL, data);
  }
  putData(data: User): Observable<User> {
    return this.http.put<User>(this.baseURL, data);
  }
  deleteData(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseURL}/${id}`);
  }
}
