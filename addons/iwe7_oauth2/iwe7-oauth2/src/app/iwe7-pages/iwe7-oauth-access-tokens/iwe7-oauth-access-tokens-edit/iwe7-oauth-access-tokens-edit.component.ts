import { UpsertIwe7OauthAccessToken } from './../../../actions/iwe7-oauth-access-token.actions';
import { Component, OnInit } from '@angular/core';
import { Iwe7OauthAccessToken } from '../../../models/iwe7-oauth-access-token.model';
import { Iwe7Editor2Component } from 'iwe7-editor2';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'iwe7-oauth-access-tokens-edit',
  templateUrl: './iwe7-oauth-access-tokens-edit.component.html',
  styleUrls: ['./iwe7-oauth-access-tokens-edit.component.scss']
})
export class Iwe7OauthAccessTokensEditComponent extends Iwe7Editor2Component<Iwe7OauthAccessToken> implements OnInit {
  static title: string = '添加应用';
  static code: string = 'iwe7-oauth-access-tokens';
  static action = (val: Iwe7OauthAccessToken) => {
    return new UpsertIwe7OauthAccessToken({
      Iwe7OauthAccessToken: val
    });
  }
  schema: SFSchema = {
    properties: {}
  };
  ui: SFUISchema = {};
  constructor() {
    super();
  }
  ngOnInit() { }
}
