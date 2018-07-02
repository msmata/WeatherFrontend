import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';
import { YahooCondition } from '../yahooCondition';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  showLocationSearch: boolean;

  conditions: Array<YahooCondition>;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private location: Location, private locationService: LocationService) { }

  ngOnInit() {
    this.getUser();
    this.showLocationSearch = false;
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(usuario => {this.user = usuario;this.getUserLocationsConditions();});
  }

  getUserLocationsConditions(): void {
    this.conditions = new Array();

    for (let location of this.user.locations){
      this.locationService.getCondition(location.woeid).subscribe(condition => {condition.query.woeid = location.woeid;condition.query.location = location.name;this.conditions.push(condition)});
    }
  }

  removeLocation(woeid: number):void {
    
    if (confirm('Remuevo ' + woeid + ' de usuario ' + this.user.id)){
      this.userService.removeLocationToUser(this.user, woeid);
    }
  
  }

  goBack(): void {
    this.location.back();
  }

  addLocation(): void {
    this.showLocationSearch = true;
  }
}
