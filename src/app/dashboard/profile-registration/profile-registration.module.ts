import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRegistrationRoutingModule } from './profile-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from '../dashboard.module';
import { ProfileRegistrationListComponent } from './profile-registration-list/profile-registration-list.component';


@NgModule({
  declarations: [ProfileRegistrationListComponent],
  imports: [
    CommonModule,
    ProfileRegistrationRoutingModule,
    SharedModule,
    DashboardModule
  ]
})
export class ProfileRegistrationModule { }
