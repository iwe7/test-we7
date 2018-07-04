import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthCodes } from '../models/iwe7-oauth-codes.model';

export enum Iwe7OauthCodesActionTypes {
  LoadIwe7OauthCodess = '[Iwe7OauthCodes] Load Iwe7OauthCodess',
  LoadSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Load Success Iwe7OauthCodess',
  LoadFailIwe7OauthCodess = '[Iwe7OauthCodes] Load Fail Iwe7OauthCodess',
  AddIwe7OauthCodes = '[Iwe7OauthCodes] Add Iwe7OauthCodes',
  AddSuccessIwe7OauthCodes = '[Iwe7OauthCodes] Add Success Iwe7OauthCodes',
  AddFailIwe7OauthCodes = '[Iwe7OauthCodes] Add Fail Iwe7OauthCodes',
  UpsertIwe7OauthCodes = '[Iwe7OauthCodes] Upsert Iwe7OauthCodes',
  UpsertSuccessIwe7OauthCodes = '[Iwe7OauthCodes] Upsert Success Iwe7OauthCodes',
  UpsertFailIwe7OauthCodes = '[Iwe7OauthCodes] Upsert Fail Iwe7OauthCodes',
  AddIwe7OauthCodess = '[Iwe7OauthCodes] Add Iwe7OauthCodess',
  AddSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Add Success Iwe7OauthCodess',
  AddFailIwe7OauthCodess = '[Iwe7OauthCodes] Add Fail Iwe7OauthCodess',
  UpsertIwe7OauthCodess = '[Iwe7OauthCodes] Upsert Iwe7OauthCodess',
  UpsertSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Upsert Success Iwe7OauthCodess',
  UpsertFailIwe7OauthCodess = '[Iwe7OauthCodes] Upsert Fail Iwe7OauthCodess',
  UpdateIwe7OauthCodes = '[Iwe7OauthCodes] Update Iwe7OauthCodes',
  UpdateSuccessIwe7OauthCodes = '[Iwe7OauthCodes] Update Success Iwe7OauthCodes',
  UpdateFailIwe7OauthCodes = '[Iwe7OauthCodes] Update Fail Iwe7OauthCodes',
  UpdateIwe7OauthCodess = '[Iwe7OauthCodes] Update Iwe7OauthCodess',
  UpdateSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Update Success Iwe7OauthCodess',
  UpdateFailIwe7OauthCodess = '[Iwe7OauthCodes] Update Fail Iwe7OauthCodess',
  DeleteIwe7OauthCodes = '[Iwe7OauthCodes] Delete Iwe7OauthCodes',
  DeleteSuccessIwe7OauthCodes = '[Iwe7OauthCodes] Delete Success Iwe7OauthCodes',
  DeleteFailIwe7OauthCodes = '[Iwe7OauthCodes] Delete Fail Iwe7OauthCodes',
  DeleteIwe7OauthCodess = '[Iwe7OauthCodes] Delete Iwe7OauthCodess',
  DeleteSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Delete Success Iwe7OauthCodess',
  DeleteFailIwe7OauthCodess = '[Iwe7OauthCodes] Delete Fail Iwe7OauthCodess',
  ClearIwe7OauthCodess = '[Iwe7OauthCodes] Clear Iwe7OauthCodess',
  ClearSuccessIwe7OauthCodess = '[Iwe7OauthCodes] Clear Success Iwe7OauthCodess',
  ClearFailIwe7OauthCodess = '[Iwe7OauthCodes] Clear Fail Iwe7OauthCodess',
  SelectIwe7OauthCodes = '[Iwe7OauthCodes] Select Iwe7OauthCodess',
}

export class LoadIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.LoadIwe7OauthCodess;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.LoadSuccessIwe7OauthCodess;
  constructor(public payload: { Iwe7OauthCodess: Iwe7OauthCodes[], total: number }) {}
}

export class LoadFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.LoadFailIwe7OauthCodess;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Iwe7OauthCodes }) {}
}

export class AddSuccessIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddSuccessIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Iwe7OauthCodes }) {}
}

export class AddFailIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddFailIwe7OauthCodes;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Iwe7OauthCodes }) {}
}

export class UpsertSuccessIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertSuccessIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Iwe7OauthCodes }) {}
}

export class UpsertFailIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertFailIwe7OauthCodes;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Iwe7OauthCodes[] }) {}
}

export class AddSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddSuccessIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Iwe7OauthCodes[] }) {}
}

export class AddFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.AddFailIwe7OauthCodess;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Iwe7OauthCodes[] }) {}
}

export class UpsertSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertSuccessIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Iwe7OauthCodes[] }) {}
}

export class UpsertFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpsertFailIwe7OauthCodess;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Update<Iwe7OauthCodes> }) {}
}

export class UpdateSuccessIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateSuccessIwe7OauthCodes;

  constructor(public payload: { Iwe7OauthCodes: Update<Iwe7OauthCodes> }) {}
}

export class UpdateFailIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateFailIwe7OauthCodes;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Update<Iwe7OauthCodes>[] }) {}
}

export class UpdateSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateSuccessIwe7OauthCodess;

  constructor(public payload: { Iwe7OauthCodess: Update<Iwe7OauthCodes>[] }) {}
}

export class UpdateFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.UpdateFailIwe7OauthCodess;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.SelectIwe7OauthCodes;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteIwe7OauthCodes;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteSuccessIwe7OauthCodes;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthCodes implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteFailIwe7OauthCodes;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteIwe7OauthCodess;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteSuccessIwe7OauthCodess;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.DeleteFailIwe7OauthCodess;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.ClearIwe7OauthCodess;
}

export class ClearSuccessIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.ClearSuccessIwe7OauthCodess;
}

export class ClearFailIwe7OauthCodess implements Action {
  readonly type = Iwe7OauthCodesActionTypes.ClearFailIwe7OauthCodess;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthCodesActions =
 LoadIwe7OauthCodess
 | LoadSuccessIwe7OauthCodess
 | LoadFailIwe7OauthCodess

 | AddIwe7OauthCodes
 | AddSuccessIwe7OauthCodes
 | AddFailIwe7OauthCodes

 | UpsertIwe7OauthCodes
 | UpsertSuccessIwe7OauthCodes
 | UpsertFailIwe7OauthCodes

 | AddIwe7OauthCodess
 | AddSuccessIwe7OauthCodess
 | AddFailIwe7OauthCodess

 | UpsertIwe7OauthCodess
 | UpsertSuccessIwe7OauthCodess
 | UpsertFailIwe7OauthCodess

 | UpdateIwe7OauthCodes
 | UpdateSuccessIwe7OauthCodes
 | UpdateFailIwe7OauthCodes

 | UpdateIwe7OauthCodess
 | UpdateSuccessIwe7OauthCodess
 | UpdateFailIwe7OauthCodess

 | DeleteIwe7OauthCodes
 | DeleteSuccessIwe7OauthCodes
 | DeleteFailIwe7OauthCodes

 | DeleteIwe7OauthCodess
 | DeleteSuccessIwe7OauthCodess
 | DeleteFailIwe7OauthCodess

 | ClearIwe7OauthCodess
 | ClearSuccessIwe7OauthCodess
 | ClearFailIwe7OauthCodess

 | SelectIwe7OauthCodes;
