import { DelonABCModule } from '@delon/abc';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7OauthClientsRoutingModule } from './iwe7-oauth-clients-routing.module';
import { Iwe7OauthClientsComponent } from './iwe7-oauth-clients/iwe7-oauth-clients.component';
@NgModule({
  imports: [
    CommonModule,
    Iwe7OauthClientsRoutingModule,
    NgZorroAntdModule,
    DelonABCModule
  ],
  declarations: [Iwe7OauthClientsComponent]
})
export class Iwe7OauthClientsModule { }
