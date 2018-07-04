import { DelonFormModule } from '@delon/form';
import { Iwe7Editor2Service } from 'iwe7-editor2';
import { Iwe7OauthClientsEditComponent } from './iwe7-oauth-clients/iwe7-oauth-clients-edit/iwe7-oauth-clients-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7PagesRoutingModule } from './iwe7-pages-routing.module';
import { Iwe7OauthAccessTokensEditComponent } from './iwe7-oauth-access-tokens/iwe7-oauth-access-tokens-edit/iwe7-oauth-access-tokens-edit.component';
import { Iwe7OauthAuthorizationCodesEditComponent } from './iwe7-oauth-authorization-codes/iwe7-oauth-authorization-codes-edit/iwe7-oauth-authorization-codes-edit.component';
import { Iwe7OauthJwtEditComponent } from './iwe7-oauth-jwt/iwe7-oauth-jwt-edit/iwe7-oauth-jwt-edit.component';
import { Iwe7OauthScopesEditComponent } from './iwe7-oauth-scopes/iwe7-oauth-scopes-edit/iwe7-oauth-scopes-edit.component';
import { Iwe7OauthRefreshTokensEditComponent } from './iwe7-oauth-refresh-tokens/iwe7-oauth-refresh-tokens-edit/iwe7-oauth-refresh-tokens-edit.component';

// entryComponents
export const entryComponents = [
  Iwe7OauthClientsEditComponent,
  Iwe7OauthAccessTokensEditComponent,
  Iwe7OauthAuthorizationCodesEditComponent,
  Iwe7OauthJwtEditComponent,
  Iwe7OauthScopesEditComponent,
  Iwe7OauthRefreshTokensEditComponent
];
@NgModule({
  imports: [
    CommonModule,
    Iwe7PagesRoutingModule,
    DelonFormModule
  ],
  declarations: [
    ...entryComponents
  ],
  entryComponents: [
    ...entryComponents
  ]
})
export class Iwe7PagesModule {
  constructor(editor2: Iwe7Editor2Service) {
    entryComponents.map((res: any) => {
      editor2.set(res.code, {
        component: res,
        title: res.title,
        action: res.action
      });
    });
  }
}
