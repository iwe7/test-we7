import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7OauthAuthorizationCodesRoutingModule } from './iwe7-oauth-authorization-codes-routing.module';
import { Iwe7OauthAuthorizationCodesComponent } from './iwe7-oauth-authorization-codes/iwe7-oauth-authorization-codes.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthAuthorizationCodesRoutingModule,
  ],
  declarations: [Iwe7OauthAuthorizationCodesComponent]
})
export class Iwe7OauthAuthorizationCodesModule { }
