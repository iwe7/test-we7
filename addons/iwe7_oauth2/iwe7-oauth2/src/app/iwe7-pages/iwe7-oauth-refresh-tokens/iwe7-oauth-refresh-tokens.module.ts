import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7OauthRefreshTokensRoutingModule } from './iwe7-oauth-refresh-tokens-routing.module';
import { Iwe7OauthRefreshTokensComponent } from './iwe7-oauth-refresh-tokens/iwe7-oauth-refresh-tokens.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthRefreshTokensRoutingModule,
  ],
  declarations: [Iwe7OauthRefreshTokensComponent]
})
export class Iwe7OauthRefreshTokensModule { }
