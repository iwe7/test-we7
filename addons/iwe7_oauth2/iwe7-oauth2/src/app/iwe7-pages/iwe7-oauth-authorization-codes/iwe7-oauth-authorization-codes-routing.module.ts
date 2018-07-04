import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthAuthorizationCodesComponent } from './iwe7-oauth-authorization-codes/iwe7-oauth-authorization-codes.component';

const routes: Routes = [{ path: '', component: Iwe7OauthAuthorizationCodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthAuthorizationCodesRoutingModule { }
