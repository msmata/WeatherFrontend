import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { YahooLocation } from './yahooLocation';
import { Observable } from 'rxjs';
import { YahooCondition } from './yahooCondition';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private yahooLocationQuery = 'select name, woeid, country from geo.places(5) where text="';
  private yahooConditionQuery = 'select item.condition from weather.forecast where woeid = ';
  private yahooAPIUrl = 'https://query.yahooapis.com/v1/public/yql';


  constructor(private http: HttpClient) { }

  searchLocation(location: string): Observable<YahooLocation> {

    const params = new HttpParams().set('q', this.yahooLocationQuery + location + '"').set('format', 'json');

    return this.http.get<YahooLocation>( this.yahooAPIUrl, { params } );

  }

  getCondition(woeid): Observable<YahooCondition> {
    const params = new HttpParams().set('q', this.yahooConditionQuery + woeid).set('format', 'json');

    return this.http.get<YahooCondition>( this.yahooAPIUrl, { params } );
  }
}
