import { UpsertIwe7OauthScopes } from './../../../actions/iwe7-oauth-scopes.actions';
import { Component, OnInit } from '@angular/core';
import { Iwe7OauthScopes } from '../../../models/iwe7-oauth-scopes.model';
import { Iwe7Editor2Component } from 'iwe7-editor2';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'iwe7-oauth-scopes-edit',
  templateUrl: './iwe7-oauth-scopes-edit.component.html',
  styleUrls: ['./iwe7-oauth-scopes-edit.component.scss']
})
export class Iwe7OauthScopesEditComponent extends Iwe7Editor2Component<Iwe7OauthScopes> implements OnInit {
  static title: string = '添加权限';
  static code: string = 'iwe7-oauth-scopes';
  static action = (val: Iwe7OauthScopes) => {
    return new UpsertIwe7OauthScopes({
      Iwe7OauthScopes: val
    });
  }
  schema: SFSchema = {
    properties: {

    }
  };
  ui: SFUISchema = {};
  constructor() {
    super();
  }
  ngOnInit() { }
}
