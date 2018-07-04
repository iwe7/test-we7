import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7OauthClients } from '../models/iwe7-oauth-clients.model';

export enum Iwe7OauthClientsActionTypes {
  LoadIwe7OauthClientss = '[Iwe7OauthClients] Load Iwe7OauthClientss',
  LoadSuccessIwe7OauthClientss = '[Iwe7OauthClients] Load Success Iwe7OauthClientss',
  LoadFailIwe7OauthClientss = '[Iwe7OauthClients] Load Fail Iwe7OauthClientss',
  AddIwe7OauthClients = '[Iwe7OauthClients] Add Iwe7OauthClients',
  AddSuccessIwe7OauthClients = '[Iwe7OauthClients] Add Success Iwe7OauthClients',
  AddFailIwe7OauthClients = '[Iwe7OauthClients] Add Fail Iwe7OauthClients',
  UpsertIwe7OauthClients = '[Iwe7OauthClients] Upsert Iwe7OauthClients',
  UpsertSuccessIwe7OauthClients = '[Iwe7OauthClients] Upsert Success Iwe7OauthClients',
  UpsertFailIwe7OauthClients = '[Iwe7OauthClients] Upsert Fail Iwe7OauthClients',
  AddIwe7OauthClientss = '[Iwe7OauthClients] Add Iwe7OauthClientss',
  AddSuccessIwe7OauthClientss = '[Iwe7OauthClients] Add Success Iwe7OauthClientss',
  AddFailIwe7OauthClientss = '[Iwe7OauthClients] Add Fail Iwe7OauthClientss',
  UpsertIwe7OauthClientss = '[Iwe7OauthClients] Upsert Iwe7OauthClientss',
  UpsertSuccessIwe7OauthClientss = '[Iwe7OauthClients] Upsert Success Iwe7OauthClientss',
  UpsertFailIwe7OauthClientss = '[Iwe7OauthClients] Upsert Fail Iwe7OauthClientss',
  UpdateIwe7OauthClients = '[Iwe7OauthClients] Update Iwe7OauthClients',
  UpdateSuccessIwe7OauthClients = '[Iwe7OauthClients] Update Success Iwe7OauthClients',
  UpdateFailIwe7OauthClients = '[Iwe7OauthClients] Update Fail Iwe7OauthClients',
  UpdateIwe7OauthClientss = '[Iwe7OauthClients] Update Iwe7OauthClientss',
  UpdateSuccessIwe7OauthClientss = '[Iwe7OauthClients] Update Success Iwe7OauthClientss',
  UpdateFailIwe7OauthClientss = '[Iwe7OauthClients] Update Fail Iwe7OauthClientss',
  DeleteIwe7OauthClients = '[Iwe7OauthClients] Delete Iwe7OauthClients',
  DeleteSuccessIwe7OauthClients = '[Iwe7OauthClients] Delete Success Iwe7OauthClients',
  DeleteFailIwe7OauthClients = '[Iwe7OauthClients] Delete Fail Iwe7OauthClients',
  DeleteIwe7OauthClientss = '[Iwe7OauthClients] Delete Iwe7OauthClientss',
  DeleteSuccessIwe7OauthClientss = '[Iwe7OauthClients] Delete Success Iwe7OauthClientss',
  DeleteFailIwe7OauthClientss = '[Iwe7OauthClients] Delete Fail Iwe7OauthClientss',
  ClearIwe7OauthClientss = '[Iwe7OauthClients] Clear Iwe7OauthClientss',
  ClearSuccessIwe7OauthClientss = '[Iwe7OauthClients] Clear Success Iwe7OauthClientss',
  ClearFailIwe7OauthClientss = '[Iwe7OauthClients] Clear Fail Iwe7OauthClientss',
  SelectIwe7OauthClients = '[Iwe7OauthClients] Select Iwe7OauthClientss',
}

export class LoadIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.LoadIwe7OauthClientss;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.LoadSuccessIwe7OauthClientss;
  constructor(public payload: { Iwe7OauthClientss: Iwe7OauthClients[], total: number }) {}
}

export class LoadFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.LoadFailIwe7OauthClientss;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Iwe7OauthClients }) {}
}

export class AddSuccessIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddSuccessIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Iwe7OauthClients }) {}
}

export class AddFailIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddFailIwe7OauthClients;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Iwe7OauthClients }) {}
}

export class UpsertSuccessIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertSuccessIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Iwe7OauthClients }) {}
}

export class UpsertFailIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertFailIwe7OauthClients;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Iwe7OauthClients[] }) {}
}

export class AddSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddSuccessIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Iwe7OauthClients[] }) {}
}

export class AddFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.AddFailIwe7OauthClientss;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Iwe7OauthClients[] }) {}
}

export class UpsertSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertSuccessIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Iwe7OauthClients[] }) {}
}

export class UpsertFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpsertFailIwe7OauthClientss;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Update<Iwe7OauthClients> }) {}
}

export class UpdateSuccessIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateSuccessIwe7OauthClients;

  constructor(public payload: { Iwe7OauthClients: Update<Iwe7OauthClients> }) {}
}

export class UpdateFailIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateFailIwe7OauthClients;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Update<Iwe7OauthClients>[] }) {}
}

export class UpdateSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateSuccessIwe7OauthClientss;

  constructor(public payload: { Iwe7OauthClientss: Update<Iwe7OauthClients>[] }) {}
}

export class UpdateFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.UpdateFailIwe7OauthClientss;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.SelectIwe7OauthClients;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteIwe7OauthClients;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteSuccessIwe7OauthClients;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7OauthClients implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteFailIwe7OauthClients;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteIwe7OauthClientss;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteSuccessIwe7OauthClientss;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.DeleteFailIwe7OauthClientss;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.ClearIwe7OauthClientss;
}

export class ClearSuccessIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.ClearSuccessIwe7OauthClientss;
}

export class ClearFailIwe7OauthClientss implements Action {
  readonly type = Iwe7OauthClientsActionTypes.ClearFailIwe7OauthClientss;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7OauthClientsActions =
 LoadIwe7OauthClientss
 | LoadSuccessIwe7OauthClientss
 | LoadFailIwe7OauthClientss

 | AddIwe7OauthClients
 | AddSuccessIwe7OauthClients
 | AddFailIwe7OauthClients

 | UpsertIwe7OauthClients
 | UpsertSuccessIwe7OauthClients
 | UpsertFailIwe7OauthClients

 | AddIwe7OauthClientss
 | AddSuccessIwe7OauthClientss
 | AddFailIwe7OauthClientss

 | UpsertIwe7OauthClientss
 | UpsertSuccessIwe7OauthClientss
 | UpsertFailIwe7OauthClientss

 | UpdateIwe7OauthClients
 | UpdateSuccessIwe7OauthClients
 | UpdateFailIwe7OauthClients

 | UpdateIwe7OauthClientss
 | UpdateSuccessIwe7OauthClientss
 | UpdateFailIwe7OauthClientss

 | DeleteIwe7OauthClients
 | DeleteSuccessIwe7OauthClients
 | DeleteFailIwe7OauthClients

 | DeleteIwe7OauthClientss
 | DeleteSuccessIwe7OauthClientss
 | DeleteFailIwe7OauthClientss

 | ClearIwe7OauthClientss
 | ClearSuccessIwe7OauthClientss
 | ClearFailIwe7OauthClientss

 | SelectIwe7OauthClients;
