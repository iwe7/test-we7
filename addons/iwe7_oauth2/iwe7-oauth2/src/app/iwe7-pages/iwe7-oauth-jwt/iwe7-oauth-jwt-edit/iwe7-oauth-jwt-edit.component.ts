import { UpsertIwe7OauthJwt } from './../../../actions/iwe7-oauth-jwt.actions';
import { Component, OnInit } from '@angular/core';
import { Iwe7OauthJwt } from '../../../models/iwe7-oauth-jwt.model';
import { Iwe7Editor2Component } from 'iwe7-editor2';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'iwe7-oauth-jwt-edit',
  templateUrl: './iwe7-oauth-jwt-edit.component.html',
  styleUrls: ['./iwe7-oauth-jwt-edit.component.scss']
})
export class Iwe7OauthJwtEditComponent extends Iwe7Editor2Component<Iwe7OauthJwt> implements OnInit {
  static title: string = '添加JWT';
  static code: string = 'iwe7-oauth-jwt';
  static action = (val: Iwe7OauthJwt) => {
    return new UpsertIwe7OauthJwt({
      Iwe7OauthJwt: val
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
