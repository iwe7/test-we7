import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthRefreshToken } from '../models/iwe7-oauth-refresh-token.model';

export enum Iwe7OauthRefreshTokenActionTypes {
  LoadIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Load Iwe7OauthRefreshTokens',
  LoadSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Load Success Iwe7OauthRefreshTokens',
  LoadFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Load Fail Iwe7OauthRefreshTokens',
  AddIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Add Iwe7OauthRefreshToken',
  AddSuccessIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Add Success Iwe7OauthRefreshToken',
  AddFailIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Add Fail Iwe7OauthRefreshToken',
  UpsertIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Upsert Iwe7OauthRefreshToken',
  UpsertSuccessIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Upsert Success Iwe7OauthRefreshToken',
  UpsertFailIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Upsert Fail Iwe7OauthRefreshToken',
  AddIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Add Iwe7OauthRefreshTokens',
  AddSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Add Success Iwe7OauthRefreshTokens',
  AddFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Add Fail Iwe7OauthRefreshTokens',
  UpsertIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Upsert Iwe7OauthRefreshTokens',
  UpsertSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Upsert Success Iwe7OauthRefreshTokens',
  UpsertFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Upsert Fail Iwe7OauthRefreshTokens',
  UpdateIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Update Iwe7OauthRefreshToken',
  UpdateSuccessIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Update Success Iwe7OauthRefreshToken',
  UpdateFailIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Update Fail Iwe7OauthRefreshToken',
  UpdateIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Update Iwe7OauthRefreshTokens',
  UpdateSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Update Success Iwe7OauthRefreshTokens',
  UpdateFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Update Fail Iwe7OauthRefreshTokens',
  DeleteIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Delete Iwe7OauthRefreshToken',
  DeleteSuccessIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Delete Success Iwe7OauthRefreshToken',
  DeleteFailIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Delete Fail Iwe7OauthRefreshToken',
  DeleteIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Delete Iwe7OauthRefreshTokens',
  DeleteSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Delete Success Iwe7OauthRefreshTokens',
  DeleteFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Delete Fail Iwe7OauthRefreshTokens',
  ClearIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Clear Iwe7OauthRefreshTokens',
  ClearSuccessIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Clear Success Iwe7OauthRefreshTokens',
  ClearFailIwe7OauthRefreshTokens = '[Iwe7OauthRefreshToken] Clear Fail Iwe7OauthRefreshTokens',
  SelectIwe7OauthRefreshToken = '[Iwe7OauthRefreshToken] Select Iwe7OauthRefreshTokens',
}

export class LoadIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.LoadIwe7OauthRefreshTokens;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.LoadSuccessIwe7OauthRefreshTokens;
  constructor(public payload: { Iwe7OauthRefreshTokens: Iwe7OauthRefreshToken[], total: number }) {}
}

export class LoadFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.LoadFailIwe7OauthRefreshTokens;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Iwe7OauthRefreshToken }) {}
}

export class AddSuccessIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddSuccessIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Iwe7OauthRefreshToken }) {}
}

export class AddFailIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddFailIwe7OauthRefreshToken;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Iwe7OauthRefreshToken }) {}
}

export class UpsertSuccessIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertSuccessIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Iwe7OauthRefreshToken }) {}
}

export class UpsertFailIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertFailIwe7OauthRefreshToken;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Iwe7OauthRefreshToken[] }) {}
}

export class AddSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddSuccessIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Iwe7OauthRefreshToken[] }) {}
}

export class AddFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.AddFailIwe7OauthRefreshTokens;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Iwe7OauthRefreshToken[] }) {}
}

export class UpsertSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertSuccessIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Iwe7OauthRefreshToken[] }) {}
}

export class UpsertFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpsertFailIwe7OauthRefreshTokens;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Update<Iwe7OauthRefreshToken> }) {}
}

export class UpdateSuccessIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateSuccessIwe7OauthRefreshToken;

  constructor(public payload: { Iwe7OauthRefreshToken: Update<Iwe7OauthRefreshToken> }) {}
}

export class UpdateFailIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateFailIwe7OauthRefreshToken;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Update<Iwe7OauthRefreshToken>[] }) {}
}

export class UpdateSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateSuccessIwe7OauthRefreshTokens;

  constructor(public payload: { Iwe7OauthRefreshTokens: Update<Iwe7OauthRefreshToken>[] }) {}
}

export class UpdateFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.UpdateFailIwe7OauthRefreshTokens;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.SelectIwe7OauthRefreshToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteIwe7OauthRefreshToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteSuccessIwe7OauthRefreshToken;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthRefreshToken implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteFailIwe7OauthRefreshToken;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteIwe7OauthRefreshTokens;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteSuccessIwe7OauthRefreshTokens;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.DeleteFailIwe7OauthRefreshTokens;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.ClearIwe7OauthRefreshTokens;
}

export class ClearSuccessIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.ClearSuccessIwe7OauthRefreshTokens;
}

export class ClearFailIwe7OauthRefreshTokens implements Action {
  readonly type = Iwe7OauthRefreshTokenActionTypes.ClearFailIwe7OauthRefreshTokens;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthRefreshTokenActions =
 LoadIwe7OauthRefreshTokens
 | LoadSuccessIwe7OauthRefreshTokens
 | LoadFailIwe7OauthRefreshTokens

 | AddIwe7OauthRefreshToken
 | AddSuccessIwe7OauthRefreshToken
 | AddFailIwe7OauthRefreshToken

 | UpsertIwe7OauthRefreshToken
 | UpsertSuccessIwe7OauthRefreshToken
 | UpsertFailIwe7OauthRefreshToken

 | AddIwe7OauthRefreshTokens
 | AddSuccessIwe7OauthRefreshTokens
 | AddFailIwe7OauthRefreshTokens

 | UpsertIwe7OauthRefreshTokens
 | UpsertSuccessIwe7OauthRefreshTokens
 | UpsertFailIwe7OauthRefreshTokens

 | UpdateIwe7OauthRefreshToken
 | UpdateSuccessIwe7OauthRefreshToken
 | UpdateFailIwe7OauthRefreshToken

 | UpdateIwe7OauthRefreshTokens
 | UpdateSuccessIwe7OauthRefreshTokens
 | UpdateFailIwe7OauthRefreshTokens

 | DeleteIwe7OauthRefreshToken
 | DeleteSuccessIwe7OauthRefreshToken
 | DeleteFailIwe7OauthRefreshToken

 | DeleteIwe7OauthRefreshTokens
 | DeleteSuccessIwe7OauthRefreshTokens
 | DeleteFailIwe7OauthRefreshTokens

 | ClearIwe7OauthRefreshTokens
 | ClearSuccessIwe7OauthRefreshTokens
 | ClearFailIwe7OauthRefreshTokens

 | SelectIwe7OauthRefreshToken;
