import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7OauthJwtRoutingModule } from './iwe7-oauth-jwt-routing.module';
import { Iwe7OauthJwtComponent } from './iwe7-oauth-jwt/iwe7-oauth-jwt.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthJwtRoutingModule,
  ],
  declarations: [Iwe7OauthJwtComponent]
})
export class Iwe7OauthJwtModule { }
