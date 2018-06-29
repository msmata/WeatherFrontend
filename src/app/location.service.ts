import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { YahooLocation } from './yahooLocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private yahooLocationQuery = 'select name, woeid, country from geo.places(5) where text="';
  private yahooAPIUrl = 'https://query.yahooapis.com/v1/public/yql';


  constructor(private http: HttpClient) { }

  searchLocation(location: string): Observable<YahooLocation> {

    const params = new HttpParams().set('q', this.yahooLocationQuery + location + '"').set('format', 'json');

    return this.http.get<YahooLocation>( this.yahooAPIUrl, { params } );

  }

}
