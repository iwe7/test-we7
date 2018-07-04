import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthScopesActions,
  Iwe7OauthScopesActionTypes,
  LoadIwe7OauthScopess,
  LoadSuccessIwe7OauthScopess,
  LoadFailIwe7OauthScopess,
  AddIwe7OauthScopess,
  AddSuccessIwe7OauthScopess,
  AddFailIwe7OauthScopess,
  AddIwe7OauthScopes,
  AddSuccessIwe7OauthScopes,
  AddFailIwe7OauthScopes,
  UpsertIwe7OauthScopes,
  UpsertSuccessIwe7OauthScopes,
  UpsertFailIwe7OauthScopes,
  UpsertIwe7OauthScopess,
  UpsertSuccessIwe7OauthScopess,
  UpsertFailIwe7OauthScopess,
  UpdateIwe7OauthScopes,
  UpdateSuccessIwe7OauthScopes,
  UpdateFailIwe7OauthScopes,
  UpdateIwe7OauthScopess,
  UpdateSuccessIwe7OauthScopess,
  UpdateFailIwe7OauthScopess,
  DeleteIwe7OauthScopes,
  DeleteSuccessIwe7OauthScopes,
  DeleteFailIwe7OauthScopes,
  DeleteIwe7OauthScopess,
  DeleteSuccessIwe7OauthScopess,
  DeleteFailIwe7OauthScopess,
  ClearIwe7OauthScopess,
  ClearSuccessIwe7OauthScopess,
  ClearFailIwe7OauthScopess
} from '../actions/iwe7-oauth-scopes.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthScopes } from '../models/iwe7-oauth-scopes.model';

@Injectable()
export class Iwe7OauthScopesEffects {
  @Effect()
  LoadIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.LoadIwe7OauthScopess).pipe(
    map((res: LoadIwe7OauthScopess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'LoadIwe7OauthScopess', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthScopes[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthScopess({ Iwe7OauthScopess: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthScopess({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthScopes$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.AddIwe7OauthScopes).pipe(
    map((res: AddIwe7OauthScopes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'AddIwe7OauthScopes', res)),
    map((res: Iwe7Response<Iwe7OauthScopes>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthScopes({ Iwe7OauthScopes: res.data });
      } else {
        return new AddFailIwe7OauthScopes({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthScopess({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.AddIwe7OauthScopess).pipe(
    map((res: AddIwe7OauthScopess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'AddIwe7OauthScopess', res)),
    map((res: Iwe7Response<Iwe7OauthScopes[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthScopess({ Iwe7OauthScopess: res.data });
      } else {
        return new AddFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthScopess({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthScopes$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.UpsertIwe7OauthScopes).pipe(
    map((res: UpsertIwe7OauthScopes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'UpsertIwe7OauthScopes', res)),
    map((res: Iwe7Response<Iwe7OauthScopes>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthScopes({ Iwe7OauthScopes: res.data });
      } else {
        return new UpsertFailIwe7OauthScopes({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthScopes({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.UpsertIwe7OauthScopess).pipe(
    map((res: UpsertIwe7OauthScopess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'UpsertIwe7OauthScopess', res)),
    map((res: Iwe7Response<Iwe7OauthScopes[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthScopess({ Iwe7OauthScopess: res.data });
      } else {
        return new UpsertFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthScopess({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthScopes$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.UpdateIwe7OauthScopes).pipe(
    map((res: UpdateIwe7OauthScopes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'UpdateIwe7OauthScopes', res)),
    map((res: Iwe7Response<Update<Iwe7OauthScopes>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthScopes({ Iwe7OauthScopes: res.data });
      } else {
        return new UpdateFailIwe7OauthScopes({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthScopes({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.UpdateIwe7OauthScopess).pipe(
    map((res: UpdateIwe7OauthScopess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'UpdateIwe7OauthScopess', res)),
    map((res: Iwe7Response<Update<Iwe7OauthScopes>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthScopess({ Iwe7OauthScopess: res.data });
      } else {
        return new UpdateFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthScopess({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthScopes$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.DeleteIwe7OauthScopes).pipe(
    map((res: DeleteIwe7OauthScopes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'DeleteIwe7OauthScopes', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthScopes({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthScopes({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthScopes({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.DeleteIwe7OauthScopess).pipe(
    map((res: DeleteIwe7OauthScopess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'DeleteIwe7OauthScopess', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthScopess({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthScopes({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthScopess$: Observable<Action> = this.actions$.ofType(Iwe7OauthScopesActionTypes.ClearIwe7OauthScopess).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthScopes', 'ClearIwe7OauthScopess', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthScopess();
      } else {
        return new ClearFailIwe7OauthScopess({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthScopess({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
