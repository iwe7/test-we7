import { Iwe7OauthAuthorizationCodesModule } from './iwe7-oauth-authorization-codes/iwe7-oauth-authorization-codes.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../iwe7-layout/layout-default/layout-default.component';
// ?c=site&a=entry&do=index&m=iwe7_oauth2&__title=%E9%A6%96%E9%A1%B5%E5%85%A5%E5%8F%A3&version_id=0
const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'clients',
        loadChildren: './iwe7-oauth-clients/iwe7-oauth-clients.module#Iwe7OauthClientsModule'
      }, {
        path: 'index',
        loadChildren: './iwe7-oauth-clients/iwe7-oauth-clients.module#Iwe7OauthClientsModule'
      }, {
        path: 'access-tokens',
        loadChildren: './iwe7-oauth-access-tokens/iwe7-oauth-access-tokens.module#Iwe7OauthAccessTokensModule'
      }, {
        path: 'codes',
        loadChildren: './iwe7-oauth-authorization-codes/iwe7-oauth-authorization-codes.module#Iwe7OauthAuthorizationCodesModule'
      }, {
        path: 'jwt',
        loadChildren: './iwe7-oauth-jwt/iwe7-oauth-jwt.module#Iwe7OauthJwtModule'
      }, {
        path: 'refresh-tokens',
        loadChildren: './iwe7-oauth-refresh-tokens/iwe7-oauth-refresh-tokens.module#Iwe7OauthRefreshTokensModule'
      }, {
        path: 'scopes',
        loadChildren: './iwe7-oauth-scopes/iwe7-oauth-scopes.module#Iwe7OauthScopesModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7PagesRoutingModule { }
