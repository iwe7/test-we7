import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthScopesComponent } from './iwe7-oauth-scopes/iwe7-oauth-scopes.component';

const routes: Routes = [{ path: '', component: Iwe7OauthScopesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthScopesRoutingModule { }
