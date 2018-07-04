import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthClientsActions,
  Iwe7OauthClientsActionTypes,
  LoadIwe7OauthClientss,
  LoadSuccessIwe7OauthClientss,
  LoadFailIwe7OauthClientss,
  AddIwe7OauthClientss,
  AddSuccessIwe7OauthClientss,
  AddFailIwe7OauthClientss,
  AddIwe7OauthClients,
  AddSuccessIwe7OauthClients,
  AddFailIwe7OauthClients,
  UpsertIwe7OauthClients,
  UpsertSuccessIwe7OauthClients,
  UpsertFailIwe7OauthClients,
  UpsertIwe7OauthClientss,
  UpsertSuccessIwe7OauthClientss,
  UpsertFailIwe7OauthClientss,
  UpdateIwe7OauthClients,
  UpdateSuccessIwe7OauthClients,
  UpdateFailIwe7OauthClients,
  UpdateIwe7OauthClientss,
  UpdateSuccessIwe7OauthClientss,
  UpdateFailIwe7OauthClientss,
  DeleteIwe7OauthClients,
  DeleteSuccessIwe7OauthClients,
  DeleteFailIwe7OauthClients,
  DeleteIwe7OauthClientss,
  DeleteSuccessIwe7OauthClientss,
  DeleteFailIwe7OauthClientss,
  ClearIwe7OauthClientss,
  ClearSuccessIwe7OauthClientss,
  ClearFailIwe7OauthClientss
} from '../actions/iwe7-oauth-clients.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthClients } from '../models/iwe7-oauth-clients.model';

@Injectable()
export class Iwe7OauthClientsEffects {
  @Effect()
  LoadIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.LoadIwe7OauthClientss).pipe(
    map((res: LoadIwe7OauthClientss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'LoadIwe7OauthClientss', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthClients[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthClientss({ Iwe7OauthClientss: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthClientss({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthClients$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.AddIwe7OauthClients).pipe(
    map((res: AddIwe7OauthClients) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'AddIwe7OauthClients', res)),
    map((res: Iwe7Response<Iwe7OauthClients>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthClients({ Iwe7OauthClients: res.data });
      } else {
        return new AddFailIwe7OauthClients({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthClientss({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.AddIwe7OauthClientss).pipe(
    map((res: AddIwe7OauthClientss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'AddIwe7OauthClientss', res)),
    map((res: Iwe7Response<Iwe7OauthClients[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthClientss({ Iwe7OauthClientss: res.data });
      } else {
        return new AddFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthClientss({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthClients$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.UpsertIwe7OauthClients).pipe(
    map((res: UpsertIwe7OauthClients) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'UpsertIwe7OauthClients', res)),
    map((res: Iwe7Response<Iwe7OauthClients>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthClients({ Iwe7OauthClients: res.data });
      } else {
        return new UpsertFailIwe7OauthClients({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthClients({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.UpsertIwe7OauthClientss).pipe(
    map((res: UpsertIwe7OauthClientss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'UpsertIwe7OauthClientss', res)),
    map((res: Iwe7Response<Iwe7OauthClients[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthClientss({ Iwe7OauthClientss: res.data });
      } else {
        return new UpsertFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthClientss({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthClients$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.UpdateIwe7OauthClients).pipe(
    map((res: UpdateIwe7OauthClients) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'UpdateIwe7OauthClients', res)),
    map((res: Iwe7Response<Update<Iwe7OauthClients>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthClients({ Iwe7OauthClients: res.data });
      } else {
        return new UpdateFailIwe7OauthClients({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthClients({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.UpdateIwe7OauthClientss).pipe(
    map((res: UpdateIwe7OauthClientss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'UpdateIwe7OauthClientss', res)),
    map((res: Iwe7Response<Update<Iwe7OauthClients>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthClientss({ Iwe7OauthClientss: res.data });
      } else {
        return new UpdateFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthClientss({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthClients$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.DeleteIwe7OauthClients).pipe(
    map((res: DeleteIwe7OauthClients) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'DeleteIwe7OauthClients', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthClients({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthClients({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthClients({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.DeleteIwe7OauthClientss).pipe(
    map((res: DeleteIwe7OauthClientss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'DeleteIwe7OauthClientss', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthClientss({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthClients({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthClientss$: Observable<Action> = this.actions$.ofType(Iwe7OauthClientsActionTypes.ClearIwe7OauthClientss).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthClients', 'ClearIwe7OauthClientss', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthClientss();
      } else {
        return new ClearFailIwe7OauthClientss({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthClientss({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
