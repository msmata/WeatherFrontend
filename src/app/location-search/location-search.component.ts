import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { YahooLocation, Place } from '../yahooLocation';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  @Input() locacion: string;

  yahooLocation: YahooLocation;
  /*
  locationName: string;
  locationWoeid: string;
  locationCountry: string;
*/
  places: Place[];
  userId: number;

  constructor(private location: Location, private locationService: LocationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
  }

  goBack(): void {
    this.location.back();
  }

  saveLocation(woeid, userId): void{
    alert('Asocio ' + woeid + ' con el user ' + userId);
  }

  searchLocation(): void {

    this.locationService.searchLocation(this.locacion).subscribe(yahooResponse => {console.log(yahooResponse.query);
                                                                                    //this.locationName = yahooResponse.query.results.place.name;
                                                                                    //this.locationWoeid = yahooResponse.query.results.place.woeid
                                                                                    this.places = yahooResponse.query.results.place});

    //alert(response.query.results.admin1.content);
    //console.log(this.locationName);
    //alert(response);
  }
}
