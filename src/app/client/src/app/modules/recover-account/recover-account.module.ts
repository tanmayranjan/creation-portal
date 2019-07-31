import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverAccountRoutingModule } from './recover-account-routing.module';
import { IdentifyAccountComponent, SelectAccountIdentifierComponent, VerifyAccountIdentifierComponent,
  ResetPasswordComponent } from './components';
import { SharedModule } from '@sunbird/shared';
import { CoreModule } from '@sunbird/core';
import { TelemetryModule } from '@sunbird/telemetry';
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule, SuiCheckboxModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IdentifyAccountComponent, ResetPasswordComponent, SelectAccountIdentifierComponent, VerifyAccountIdentifierComponent],
  imports: [
    CommonModule,
    RecoverAccountRoutingModule,
    SharedModule,
    CoreModule,
    TelemetryModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, SuiCheckboxModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class RecoverAccountModule { }