import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LocationSearchComponent } from './location-search/location-search.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'addLocation/:userId', component: LocationSearchComponent }
];

@NgModule({
  exports: [ RouterModule ],imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}