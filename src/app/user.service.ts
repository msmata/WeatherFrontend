import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApi = 'http://192.168.0.103:8080/WeatherApi/api/user/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApi);
    // return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // return of(USERS.find(user => user.id === id));
    return this.http.get<User>(this.userApi + id);
  }
}
