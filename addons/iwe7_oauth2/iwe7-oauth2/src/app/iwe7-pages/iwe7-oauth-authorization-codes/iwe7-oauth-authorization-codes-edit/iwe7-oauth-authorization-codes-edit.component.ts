import { Iwe7OauthCodes } from './../../../models/iwe7-oauth-codes.model';
import { Component, OnInit } from '@angular/core';
import { Iwe7Editor2Component } from 'iwe7-editor2';
import { SFSchema, SFUISchema } from '@delon/form';
import { UpsertIwe7OauthCodes } from '../../../actions/iwe7-oauth-codes.actions';

@Component({
  selector: 'iwe7-oauth-authorization-codes-edit',
  templateUrl: './iwe7-oauth-authorization-codes-edit.component.html',
  styleUrls: ['./iwe7-oauth-authorization-codes-edit.component.scss']
})
export class Iwe7OauthAuthorizationCodesEditComponent extends Iwe7Editor2Component<Iwe7OauthCodes> implements OnInit {
  static title: string = '添加应用';
  static code: string = 'iwe7-oauth-authorization-codes';
  static action = (val: Iwe7OauthCodes) => {
    return new UpsertIwe7OauthCodes({
      Iwe7OauthCodes: val
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
