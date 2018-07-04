import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7OauthAccessTokensRoutingModule } from './iwe7-oauth-access-tokens-routing.module';
import { Iwe7OauthAccessTokensComponent } from './iwe7-oauth-access-tokens/iwe7-oauth-access-tokens.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthAccessTokensRoutingModule,
  ],
  declarations: [Iwe7OauthAccessTokensComponent]
})
export class Iwe7OauthAccessTokensModule { }
