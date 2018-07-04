import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Iwe7OauthClientsComponent } from './iwe7-oauth-clients/iwe7-oauth-clients.component';

const routes: Routes = [{
  path: '',
  component: Iwe7OauthClientsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7OauthClientsRoutingModule { }
