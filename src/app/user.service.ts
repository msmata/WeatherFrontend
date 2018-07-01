import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Locacion } from './locacion'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApi = 'http://192.168.0.104:8080/WeatherApi/api/user/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApi);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userApi + id);
  }

  updateUser(userid, woeid, locationName) {
    var currentUser: User;
    var location: Locacion  = new Locacion();
    location.woeid = woeid;
    location.name = locationName;
    
    this.http.get<User>(this.userApi + userid).subscribe(user => {currentUser = user;this.addLocationToUser(user, location)});
  }

  addLocationToUser(user: User, locacion: Locacion) {
    user.locations.push(locacion);
    this.http.put<User>(this.userApi + user.id, user).subscribe(response => console.log(response.username));
  }
}
