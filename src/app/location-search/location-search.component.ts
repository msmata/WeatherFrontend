import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { YahooLocation, Place } from '../yahooLocation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  @Input() locacion: string;

  yahooLocation: YahooLocation;
  
  places: Place[];
  userId: number;

  constructor(private location: Location, 
              private locationService: LocationService, 
              private userService: UserService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
  }

  goBack(): void {
    this.location.back();
  }

  saveLocation(place: Place, userId): void{
    if (confirm('Asocio ' + place.name + ' con el user ' + userId)){
      this.userService.updateUser(userId, place.woeid, place.name);
      this.location.back();
    }
  }

  searchLocation(): void {

    this.locationService.searchLocation(this.locacion).subscribe(yahooResponse => {console.log(yahooResponse.query);
                                                                                    this.places = yahooResponse.query.results.place});

  }
}
