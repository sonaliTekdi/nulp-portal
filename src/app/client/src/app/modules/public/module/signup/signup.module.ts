import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent, OtpComponent } from './components';
import { SignupRoutingModule } from './signup-routing.module';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { SignupService } from './services';
import { TelemetryModule } from '@sunbird/telemetry';
import { SharedModule } from '@sunbird/shared';
<<<<<<< HEAD
import {SharedFeatureModule } from '@sunbird/shared-feature';
=======
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { LocationModule } from '../../../../plugins/location';
import { NgSelectModule } from '@ng-select/ng-select';
>>>>>>> 5503aff2e6dcfa1b5a0d928ac53986b088066d1e


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    TelemetryModule,
    SharedModule,
<<<<<<< HEAD
    SharedFeatureModule
=======
    SharedFeatureModule,
    LocationModule,
    NgSelectModule
>>>>>>> 5503aff2e6dcfa1b5a0d928ac53986b088066d1e
  ],
  declarations: [SignupComponent, OtpComponent],
  providers: [SignupService]
})
export class SignupModule { }
