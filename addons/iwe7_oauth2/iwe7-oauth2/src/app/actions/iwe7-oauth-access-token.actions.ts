import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthAccessToken } from '../models/iwe7-oauth-access-token.model';

export enum Iwe7OauthAccessTokenActionTypes {
  LoadIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Load Iwe7OauthAccessTokens',
  LoadSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Load Success Iwe7OauthAccessTokens',
  LoadFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Load Fail Iwe7OauthAccessTokens',
  AddIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Add Iwe7OauthAccessToken',
  AddSuccessIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Add Success Iwe7OauthAccessToken',
  AddFailIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Add Fail Iwe7OauthAccessToken',
  UpsertIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Upsert Iwe7OauthAccessToken',
  UpsertSuccessIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Upsert Success Iwe7OauthAccessToken',
  UpsertFailIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Upsert Fail Iwe7OauthAccessToken',
  AddIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Add Iwe7OauthAccessTokens',
  AddSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Add Success Iwe7OauthAccessTokens',
  AddFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Add Fail Iwe7OauthAccessTokens',
  UpsertIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Upsert Iwe7OauthAccessTokens',
  UpsertSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Upsert Success Iwe7OauthAccessTokens',
  UpsertFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Upsert Fail Iwe7OauthAccessTokens',
  UpdateIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Update Iwe7OauthAccessToken',
  UpdateSuccessIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Update Success Iwe7OauthAccessToken',
  UpdateFailIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Update Fail Iwe7OauthAccessToken',
  UpdateIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Update Iwe7OauthAccessTokens',
  UpdateSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Update Success Iwe7OauthAccessTokens',
  UpdateFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Update Fail Iwe7OauthAccessTokens',
  DeleteIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Delete Iwe7OauthAccessToken',
  DeleteSuccessIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Delete Success Iwe7OauthAccessToken',
  DeleteFailIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Delete Fail Iwe7OauthAccessToken',
  DeleteIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Delete Iwe7OauthAccessTokens',
  DeleteSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Delete Success Iwe7OauthAccessTokens',
  DeleteFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Delete Fail Iwe7OauthAccessTokens',
  ClearIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Clear Iwe7OauthAccessTokens',
  ClearSuccessIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Clear Success Iwe7OauthAccessTokens',
  ClearFailIwe7OauthAccessTokens = '[Iwe7OauthAccessToken] Clear Fail Iwe7OauthAccessTokens',
  SelectIwe7OauthAccessToken = '[Iwe7OauthAccessToken] Select Iwe7OauthAccessTokens',
}

export class LoadIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.LoadIwe7OauthAccessTokens;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.LoadSuccessIwe7OauthAccessTokens;
  constructor(public payload: { Iwe7OauthAccessTokens: Iwe7OauthAccessToken[], total: number }) {}
}

export class LoadFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.LoadFailIwe7OauthAccessTokens;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Iwe7OauthAccessToken }) {}
}

export class AddSuccessIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddSuccessIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Iwe7OauthAccessToken }) {}
}

export class AddFailIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddFailIwe7OauthAccessToken;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Iwe7OauthAccessToken }) {}
}

export class UpsertSuccessIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertSuccessIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Iwe7OauthAccessToken }) {}
}

export class UpsertFailIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertFailIwe7OauthAccessToken;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Iwe7OauthAccessToken[] }) {}
}

export class AddSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddSuccessIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Iwe7OauthAccessToken[] }) {}
}

export class AddFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.AddFailIwe7OauthAccessTokens;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Iwe7OauthAccessToken[] }) {}
}

export class UpsertSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertSuccessIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Iwe7OauthAccessToken[] }) {}
}

export class UpsertFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpsertFailIwe7OauthAccessTokens;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Update<Iwe7OauthAccessToken> }) {}
}

export class UpdateSuccessIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateSuccessIwe7OauthAccessToken;

  constructor(public payload: { Iwe7OauthAccessToken: Update<Iwe7OauthAccessToken> }) {}
}

export class UpdateFailIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateFailIwe7OauthAccessToken;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Update<Iwe7OauthAccessToken>[] }) {}
}

export class UpdateSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateSuccessIwe7OauthAccessTokens;

  constructor(public payload: { Iwe7OauthAccessTokens: Update<Iwe7OauthAccessToken>[] }) {}
}

export class UpdateFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.UpdateFailIwe7OauthAccessTokens;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.SelectIwe7OauthAccessToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteIwe7OauthAccessToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteSuccessIwe7OauthAccessToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthAccessToken implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteFailIwe7OauthAccessToken;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteIwe7OauthAccessTokens;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteSuccessIwe7OauthAccessTokens;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.DeleteFailIwe7OauthAccessTokens;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.ClearIwe7OauthAccessTokens;
}

export class ClearSuccessIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.ClearSuccessIwe7OauthAccessTokens;
}

export class ClearFailIwe7OauthAccessTokens implements Action {
  readonly type = Iwe7OauthAccessTokenActionTypes.ClearFailIwe7OauthAccessTokens;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthAccessTokenActions =
 LoadIwe7OauthAccessTokens
 | LoadSuccessIwe7OauthAccessTokens
 | LoadFailIwe7OauthAccessTokens

 | AddIwe7OauthAccessToken
 | AddSuccessIwe7OauthAccessToken
 | AddFailIwe7OauthAccessToken

 | UpsertIwe7OauthAccessToken
 | UpsertSuccessIwe7OauthAccessToken
 | UpsertFailIwe7OauthAccessToken

 | AddIwe7OauthAccessTokens
 | AddSuccessIwe7OauthAccessTokens
 | AddFailIwe7OauthAccessTokens

 | UpsertIwe7OauthAccessTokens
 | UpsertSuccessIwe7OauthAccessTokens
 | UpsertFailIwe7OauthAccessTokens

 | UpdateIwe7OauthAccessToken
 | UpdateSuccessIwe7OauthAccessToken
 | UpdateFailIwe7OauthAccessToken

 | UpdateIwe7OauthAccessTokens
 | UpdateSuccessIwe7OauthAccessTokens
 | UpdateFailIwe7OauthAccessTokens

 | DeleteIwe7OauthAccessToken
 | DeleteSuccessIwe7OauthAccessToken
 | DeleteFailIwe7OauthAccessToken

 | DeleteIwe7OauthAccessTokens
 | DeleteSuccessIwe7OauthAccessTokens
 | DeleteFailIwe7OauthAccessTokens

 | ClearIwe7OauthAccessTokens
 | ClearSuccessIwe7OauthAccessTokens
 | ClearFailIwe7OauthAccessTokens

 | SelectIwe7OauthAccessToken;
