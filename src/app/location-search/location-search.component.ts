import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { LocationService } from '../location.service';
import { YahooLocation } from '../yahooLocation';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  @Input() locacion: string;

  yahooLocation: YahooLocation;
  locationName: string;
  locationWoeid: string;

  constructor(private location: Location, private locationService: LocationService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  searchLocation(): void {

    this.locationService.searchLocation(this.locacion).subscribe(yahooResponse => {console.log(yahooResponse.query);
                                                                                    this.locationName = yahooResponse.query.results.place.name;
                                                                                    this.locationWoeid = yahooResponse.query.results.place.woeid});

    //alert(response.query.results.admin1.content);
    //console.log(this.locationName);
    //alert(response);
  }
}
