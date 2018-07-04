import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthAccessTokensComponent } from './iwe7-oauth-access-tokens/iwe7-oauth-access-tokens.component';

const routes: Routes = [{ path: '', component: Iwe7OauthAccessTokensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthAccessTokensRoutingModule { }
