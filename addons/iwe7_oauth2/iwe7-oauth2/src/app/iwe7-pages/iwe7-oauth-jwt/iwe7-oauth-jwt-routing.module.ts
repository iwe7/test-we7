import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthJwtComponent } from './iwe7-oauth-jwt/iwe7-oauth-jwt.component';

const routes: Routes = [{ path: '', component: Iwe7OauthJwtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthJwtRoutingModule { }
