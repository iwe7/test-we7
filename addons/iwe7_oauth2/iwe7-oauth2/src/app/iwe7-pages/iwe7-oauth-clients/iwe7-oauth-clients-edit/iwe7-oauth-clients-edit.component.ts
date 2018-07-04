import { UpsertIwe7OauthClients } from './../../../actions/iwe7-oauth-clients.actions';
import { Component, OnInit } from '@angular/core';
import { Iwe7OauthClients } from '../../../models/iwe7-oauth-clients.model';
import { Iwe7Editor2Component } from 'iwe7-editor2';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'iwe7-oauth-clients-edit',
  templateUrl: './iwe7-oauth-clients-edit.component.html',
  styleUrls: ['./iwe7-oauth-clients-edit.component.scss']
})
export class Iwe7OauthClientsEditComponent extends Iwe7Editor2Component<Iwe7OauthClients> implements OnInit {
  static title: string = '添加平台';
  static code: string = 'iwe7-oauth-clients';
  static action = (val: Iwe7OauthClients) => {
    return new UpsertIwe7OauthClients({
      Iwe7OauthClients: val
    });
  }
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '平台名称'
      },
      client_id: {
        type: 'string',
        title: 'ClientId'
      },
      client_secret: {
        type: 'string',
        title: 'ClientSecret'
      },
      redirect_uri: {
        type: 'string',
        title: '回调地址'
      },
      grant_types: {
        type: 'string',
        title: 'GrantTypes'
      },
      scope: {
        type: 'string',
        title: '权限'
      },
      user_id: {
        type: 'string',
        title: '会员'
      }
    }
  };
  ui: SFUISchema = {};
  constructor() {
    super();
  }
  ngOnInit() { }
}
