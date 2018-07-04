import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthJwt } from '../models/iwe7-oauth-jwt.model';

export enum Iwe7OauthJwtActionTypes {
  LoadIwe7OauthJwts = '[Iwe7OauthJwt] Load Iwe7OauthJwts',
  LoadSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Load Success Iwe7OauthJwts',
  LoadFailIwe7OauthJwts = '[Iwe7OauthJwt] Load Fail Iwe7OauthJwts',
  AddIwe7OauthJwt = '[Iwe7OauthJwt] Add Iwe7OauthJwt',
  AddSuccessIwe7OauthJwt = '[Iwe7OauthJwt] Add Success Iwe7OauthJwt',
  AddFailIwe7OauthJwt = '[Iwe7OauthJwt] Add Fail Iwe7OauthJwt',
  UpsertIwe7OauthJwt = '[Iwe7OauthJwt] Upsert Iwe7OauthJwt',
  UpsertSuccessIwe7OauthJwt = '[Iwe7OauthJwt] Upsert Success Iwe7OauthJwt',
  UpsertFailIwe7OauthJwt = '[Iwe7OauthJwt] Upsert Fail Iwe7OauthJwt',
  AddIwe7OauthJwts = '[Iwe7OauthJwt] Add Iwe7OauthJwts',
  AddSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Add Success Iwe7OauthJwts',
  AddFailIwe7OauthJwts = '[Iwe7OauthJwt] Add Fail Iwe7OauthJwts',
  UpsertIwe7OauthJwts = '[Iwe7OauthJwt] Upsert Iwe7OauthJwts',
  UpsertSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Upsert Success Iwe7OauthJwts',
  UpsertFailIwe7OauthJwts = '[Iwe7OauthJwt] Upsert Fail Iwe7OauthJwts',
  UpdateIwe7OauthJwt = '[Iwe7OauthJwt] Update Iwe7OauthJwt',
  UpdateSuccessIwe7OauthJwt = '[Iwe7OauthJwt] Update Success Iwe7OauthJwt',
  UpdateFailIwe7OauthJwt = '[Iwe7OauthJwt] Update Fail Iwe7OauthJwt',
  UpdateIwe7OauthJwts = '[Iwe7OauthJwt] Update Iwe7OauthJwts',
  UpdateSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Update Success Iwe7OauthJwts',
  UpdateFailIwe7OauthJwts = '[Iwe7OauthJwt] Update Fail Iwe7OauthJwts',
  DeleteIwe7OauthJwt = '[Iwe7OauthJwt] Delete Iwe7OauthJwt',
  DeleteSuccessIwe7OauthJwt = '[Iwe7OauthJwt] Delete Success Iwe7OauthJwt',
  DeleteFailIwe7OauthJwt = '[Iwe7OauthJwt] Delete Fail Iwe7OauthJwt',
  DeleteIwe7OauthJwts = '[Iwe7OauthJwt] Delete Iwe7OauthJwts',
  DeleteSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Delete Success Iwe7OauthJwts',
  DeleteFailIwe7OauthJwts = '[Iwe7OauthJwt] Delete Fail Iwe7OauthJwts',
  ClearIwe7OauthJwts = '[Iwe7OauthJwt] Clear Iwe7OauthJwts',
  ClearSuccessIwe7OauthJwts = '[Iwe7OauthJwt] Clear Success Iwe7OauthJwts',
  ClearFailIwe7OauthJwts = '[Iwe7OauthJwt] Clear Fail Iwe7OauthJwts',
  SelectIwe7OauthJwt = '[Iwe7OauthJwt] Select Iwe7OauthJwts',
}

export class LoadIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.LoadIwe7OauthJwts;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.LoadSuccessIwe7OauthJwts;
  constructor(public payload: { Iwe7OauthJwts: Iwe7OauthJwt[], total: number }) {}
}

export class LoadFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.LoadFailIwe7OauthJwts;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Iwe7OauthJwt }) {}
}

export class AddSuccessIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddSuccessIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Iwe7OauthJwt }) {}
}

export class AddFailIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddFailIwe7OauthJwt;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Iwe7OauthJwt }) {}
}

export class UpsertSuccessIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertSuccessIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Iwe7OauthJwt }) {}
}

export class UpsertFailIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertFailIwe7OauthJwt;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Iwe7OauthJwt[] }) {}
}

export class AddSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddSuccessIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Iwe7OauthJwt[] }) {}
}

export class AddFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.AddFailIwe7OauthJwts;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Iwe7OauthJwt[] }) {}
}

export class UpsertSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertSuccessIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Iwe7OauthJwt[] }) {}
}

export class UpsertFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpsertFailIwe7OauthJwts;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Update<Iwe7OauthJwt> }) {}
}

export class UpdateSuccessIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateSuccessIwe7OauthJwt;

  constructor(public payload: { Iwe7OauthJwt: Update<Iwe7OauthJwt> }) {}
}

export class UpdateFailIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateFailIwe7OauthJwt;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Update<Iwe7OauthJwt>[] }) {}
}

export class UpdateSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateSuccessIwe7OauthJwts;

  constructor(public payload: { Iwe7OauthJwts: Update<Iwe7OauthJwt>[] }) {}
}

export class UpdateFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.UpdateFailIwe7OauthJwts;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.SelectIwe7OauthJwt;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteIwe7OauthJwt;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteSuccessIwe7OauthJwt;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthJwt implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteFailIwe7OauthJwt;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteIwe7OauthJwts;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteSuccessIwe7OauthJwts;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.DeleteFailIwe7OauthJwts;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.ClearIwe7OauthJwts;
}

export class ClearSuccessIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.ClearSuccessIwe7OauthJwts;
}

export class ClearFailIwe7OauthJwts implements Action {
  readonly type = Iwe7OauthJwtActionTypes.ClearFailIwe7OauthJwts;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthJwtActions =
 LoadIwe7OauthJwts
 | LoadSuccessIwe7OauthJwts
 | LoadFailIwe7OauthJwts

 | AddIwe7OauthJwt
 | AddSuccessIwe7OauthJwt
 | AddFailIwe7OauthJwt

 | UpsertIwe7OauthJwt
 | UpsertSuccessIwe7OauthJwt
 | UpsertFailIwe7OauthJwt

 | AddIwe7OauthJwts
 | AddSuccessIwe7OauthJwts
 | AddFailIwe7OauthJwts

 | UpsertIwe7OauthJwts
 | UpsertSuccessIwe7OauthJwts
 | UpsertFailIwe7OauthJwts

 | UpdateIwe7OauthJwt
 | UpdateSuccessIwe7OauthJwt
 | UpdateFailIwe7OauthJwt

 | UpdateIwe7OauthJwts
 | UpdateSuccessIwe7OauthJwts
 | UpdateFailIwe7OauthJwts

 | DeleteIwe7OauthJwt
 | DeleteSuccessIwe7OauthJwt
 | DeleteFailIwe7OauthJwt

 | DeleteIwe7OauthJwts
 | DeleteSuccessIwe7OauthJwts
 | DeleteFailIwe7OauthJwts

 | ClearIwe7OauthJwts
 | ClearSuccessIwe7OauthJwts
 | ClearFailIwe7OauthJwts

 | SelectIwe7OauthJwt;
