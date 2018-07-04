import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromIwe7OauthAccessToken from '../reducers/iwe7-oauth-access-token.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Iwe7OauthAccessTokenEffects } from '../effects/iwe7-oauth-access-token.effects';
import * as fromIwe7OauthCodes from '../reducers/iwe7-oauth-codes.reducer';
import { Iwe7OauthCodesEffects } from '../effects/iwe7-oauth-codes.effects';
import * as fromIwe7OauthClients from '../reducers/iwe7-oauth-clients.reducer';
import { Iwe7OauthClientsEffects } from '../effects/iwe7-oauth-clients.effects';
import * as fromIwe7OauthJwt from '../reducers/iwe7-oauth-jwt.reducer';
import { Iwe7OauthJwtEffects } from '../effects/iwe7-oauth-jwt.effects';
import * as fromIwe7OauthRefreshToken from '../reducers/iwe7-oauth-refresh-token.reducer';
import { Iwe7OauthRefreshTokenEffects } from '../effects/iwe7-oauth-refresh-token.effects';
import * as fromIwe7OauthScopes from '../reducers/iwe7-oauth-scopes.reducer';
import { Iwe7OauthScopesEffects } from '../effects/iwe7-oauth-scopes.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Iwe7OauthAccessToken', fromIwe7OauthAccessToken.reducer),
    EffectsModule.forFeature([Iwe7OauthAccessTokenEffects, Iwe7OauthCodesEffects, Iwe7OauthClientsEffects, Iwe7OauthJwtEffects, Iwe7OauthRefreshTokenEffects, Iwe7OauthScopesEffects]),
    StoreModule.forFeature('Iwe7OauthCodes', fromIwe7OauthCodes.reducer),
    StoreModule.forFeature('Iwe7OauthClients', fromIwe7OauthClients.reducer),
    StoreModule.forFeature('Iwe7OauthJwt', fromIwe7OauthJwt.reducer),
    StoreModule.forFeature('Iwe7OauthRefreshToken', fromIwe7OauthRefreshToken.reducer),
    StoreModule.forFeature('Iwe7OauthScopes', fromIwe7OauthScopes.reducer)
  ],
  declarations: []
})
export class Iwe7StoreModule { }
