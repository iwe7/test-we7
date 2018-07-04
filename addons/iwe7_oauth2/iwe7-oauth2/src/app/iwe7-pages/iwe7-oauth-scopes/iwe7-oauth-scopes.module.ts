import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7OauthScopesRoutingModule } from './iwe7-oauth-scopes-routing.module';
import { Iwe7OauthScopesComponent } from './iwe7-oauth-scopes/iwe7-oauth-scopes.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthScopesRoutingModule
  ],
  declarations: [Iwe7OauthScopesComponent]
})
export class Iwe7OauthScopesModule { }
