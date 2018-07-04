import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthScopes } from '../models/iwe7-oauth-scopes.model';

export enum Iwe7OauthScopesActionTypes {
  LoadIwe7OauthScopess = '[Iwe7OauthScopes] Load Iwe7OauthScopess',
  LoadSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Load Success Iwe7OauthScopess',
  LoadFailIwe7OauthScopess = '[Iwe7OauthScopes] Load Fail Iwe7OauthScopess',
  AddIwe7OauthScopes = '[Iwe7OauthScopes] Add Iwe7OauthScopes',
  AddSuccessIwe7OauthScopes = '[Iwe7OauthScopes] Add Success Iwe7OauthScopes',
  AddFailIwe7OauthScopes = '[Iwe7OauthScopes] Add Fail Iwe7OauthScopes',
  UpsertIwe7OauthScopes = '[Iwe7OauthScopes] Upsert Iwe7OauthScopes',
  UpsertSuccessIwe7OauthScopes = '[Iwe7OauthScopes] Upsert Success Iwe7OauthScopes',
  UpsertFailIwe7OauthScopes = '[Iwe7OauthScopes] Upsert Fail Iwe7OauthScopes',
  AddIwe7OauthScopess = '[Iwe7OauthScopes] Add Iwe7OauthScopess',
  AddSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Add Success Iwe7OauthScopess',
  AddFailIwe7OauthScopess = '[Iwe7OauthScopes] Add Fail Iwe7OauthScopess',
  UpsertIwe7OauthScopess = '[Iwe7OauthScopes] Upsert Iwe7OauthScopess',
  UpsertSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Upsert Success Iwe7OauthScopess',
  UpsertFailIwe7OauthScopess = '[Iwe7OauthScopes] Upsert Fail Iwe7OauthScopess',
  UpdateIwe7OauthScopes = '[Iwe7OauthScopes] Update Iwe7OauthScopes',
  UpdateSuccessIwe7OauthScopes = '[Iwe7OauthScopes] Update Success Iwe7OauthScopes',
  UpdateFailIwe7OauthScopes = '[Iwe7OauthScopes] Update Fail Iwe7OauthScopes',
  UpdateIwe7OauthScopess = '[Iwe7OauthScopes] Update Iwe7OauthScopess',
  UpdateSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Update Success Iwe7OauthScopess',
  UpdateFailIwe7OauthScopess = '[Iwe7OauthScopes] Update Fail Iwe7OauthScopess',
  DeleteIwe7OauthScopes = '[Iwe7OauthScopes] Delete Iwe7OauthScopes',
  DeleteSuccessIwe7OauthScopes = '[Iwe7OauthScopes] Delete Success Iwe7OauthScopes',
  DeleteFailIwe7OauthScopes = '[Iwe7OauthScopes] Delete Fail Iwe7OauthScopes',
  DeleteIwe7OauthScopess = '[Iwe7OauthScopes] Delete Iwe7OauthScopess',
  DeleteSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Delete Success Iwe7OauthScopess',
  DeleteFailIwe7OauthScopess = '[Iwe7OauthScopes] Delete Fail Iwe7OauthScopess',
  ClearIwe7OauthScopess = '[Iwe7OauthScopes] Clear Iwe7OauthScopess',
  ClearSuccessIwe7OauthScopess = '[Iwe7OauthScopes] Clear Success Iwe7OauthScopess',
  ClearFailIwe7OauthScopess = '[Iwe7OauthScopes] Clear Fail Iwe7OauthScopess',
  SelectIwe7OauthScopes = '[Iwe7OauthScopes] Select Iwe7OauthScopess',
}

export class LoadIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.LoadIwe7OauthScopess;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.LoadSuccessIwe7OauthScopess;
  constructor(public payload: { Iwe7OauthScopess: Iwe7OauthScopes[], total: number }) {}
}

export class LoadFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.LoadFailIwe7OauthScopess;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Iwe7OauthScopes }) {}
}

export class AddSuccessIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddSuccessIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Iwe7OauthScopes }) {}
}

export class AddFailIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddFailIwe7OauthScopes;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Iwe7OauthScopes }) {}
}

export class UpsertSuccessIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertSuccessIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Iwe7OauthScopes }) {}
}

export class UpsertFailIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertFailIwe7OauthScopes;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Iwe7OauthScopes[] }) {}
}

export class AddSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddSuccessIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Iwe7OauthScopes[] }) {}
}

export class AddFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.AddFailIwe7OauthScopess;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Iwe7OauthScopes[] }) {}
}

export class UpsertSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertSuccessIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Iwe7OauthScopes[] }) {}
}

export class UpsertFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpsertFailIwe7OauthScopess;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Update<Iwe7OauthScopes> }) {}
}

export class UpdateSuccessIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateSuccessIwe7OauthScopes;

  constructor(public payload: { Iwe7OauthScopes: Update<Iwe7OauthScopes> }) {}
}

export class UpdateFailIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateFailIwe7OauthScopes;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Update<Iwe7OauthScopes>[] }) {}
}

export class UpdateSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateSuccessIwe7OauthScopess;

  constructor(public payload: { Iwe7OauthScopess: Update<Iwe7OauthScopes>[] }) {}
}

export class UpdateFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.UpdateFailIwe7OauthScopess;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.SelectIwe7OauthScopes;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteIwe7OauthScopes;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteSuccessIwe7OauthScopes;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthScopes implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteFailIwe7OauthScopes;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteIwe7OauthScopess;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteSuccessIwe7OauthScopess;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.DeleteFailIwe7OauthScopess;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.ClearIwe7OauthScopess;
}

export class ClearSuccessIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.ClearSuccessIwe7OauthScopess;
}

export class ClearFailIwe7OauthScopess implements Action {
  readonly type = Iwe7OauthScopesActionTypes.ClearFailIwe7OauthScopess;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthScopesActions =
 LoadIwe7OauthScopess
 | LoadSuccessIwe7OauthScopess
 | LoadFailIwe7OauthScopess

 | AddIwe7OauthScopes
 | AddSuccessIwe7OauthScopes
 | AddFailIwe7OauthScopes

 | UpsertIwe7OauthScopes
 | UpsertSuccessIwe7OauthScopes
 | UpsertFailIwe7OauthScopes

 | AddIwe7OauthScopess
 | AddSuccessIwe7OauthScopess
 | AddFailIwe7OauthScopess

 | UpsertIwe7OauthScopess
 | UpsertSuccessIwe7OauthScopess
 | UpsertFailIwe7OauthScopess

 | UpdateIwe7OauthScopes
 | UpdateSuccessIwe7OauthScopes
 | UpdateFailIwe7OauthScopes

 | UpdateIwe7OauthScopess
 | UpdateSuccessIwe7OauthScopess
 | UpdateFailIwe7OauthScopess

 | DeleteIwe7OauthScopes
 | DeleteSuccessIwe7OauthScopes
 | DeleteFailIwe7OauthScopes

 | DeleteIwe7OauthScopess
 | DeleteSuccessIwe7OauthScopess
 | DeleteFailIwe7OauthScopess

 | ClearIwe7OauthScopess
 | ClearSuccessIwe7OauthScopess
 | ClearFailIwe7OauthScopess

 | SelectIwe7OauthScopes;
