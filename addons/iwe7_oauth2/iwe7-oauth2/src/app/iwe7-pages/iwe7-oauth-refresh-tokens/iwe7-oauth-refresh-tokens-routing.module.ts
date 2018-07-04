import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthRefreshTokensComponent } from './iwe7-oauth-refresh-tokens/iwe7-oauth-refresh-tokens.component';

const routes: Routes = [{ path: '', component: Iwe7OauthRefreshTokensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthRefreshTokensRoutingModule { }
