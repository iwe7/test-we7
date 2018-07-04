import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthAccessTokenActions,
  Iwe7OauthAccessTokenActionTypes,
  LoadIwe7OauthAccessTokens,
  LoadSuccessIwe7OauthAccessTokens,
  LoadFailIwe7OauthAccessTokens,
  AddIwe7OauthAccessTokens,
  AddSuccessIwe7OauthAccessTokens,
  AddFailIwe7OauthAccessTokens,
  AddIwe7OauthAccessToken,
  AddSuccessIwe7OauthAccessToken,
  AddFailIwe7OauthAccessToken,
  UpsertIwe7OauthAccessToken,
  UpsertSuccessIwe7OauthAccessToken,
  UpsertFailIwe7OauthAccessToken,
  UpsertIwe7OauthAccessTokens,
  UpsertSuccessIwe7OauthAccessTokens,
  UpsertFailIwe7OauthAccessTokens,
  UpdateIwe7OauthAccessToken,
  UpdateSuccessIwe7OauthAccessToken,
  UpdateFailIwe7OauthAccessToken,
  UpdateIwe7OauthAccessTokens,
  UpdateSuccessIwe7OauthAccessTokens,
  UpdateFailIwe7OauthAccessTokens,
  DeleteIwe7OauthAccessToken,
  DeleteSuccessIwe7OauthAccessToken,
  DeleteFailIwe7OauthAccessToken,
  DeleteIwe7OauthAccessTokens,
  DeleteSuccessIwe7OauthAccessTokens,
  DeleteFailIwe7OauthAccessTokens,
  ClearIwe7OauthAccessTokens,
  ClearSuccessIwe7OauthAccessTokens,
  ClearFailIwe7OauthAccessTokens
} from '../actions/iwe7-oauth-access-token.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthAccessToken } from '../models/iwe7-oauth-access-token.model';

@Injectable()
export class Iwe7OauthAccessTokenEffects {
  @Effect()
  LoadIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.LoadIwe7OauthAccessTokens).pipe(
    map((res: LoadIwe7OauthAccessTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'LoadIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthAccessToken[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthAccessTokens({ Iwe7OauthAccessTokens: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthAccessTokens({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthAccessToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.AddIwe7OauthAccessToken).pipe(
    map((res: AddIwe7OauthAccessToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'AddIwe7OauthAccessToken', res)),
    map((res: Iwe7Response<Iwe7OauthAccessToken>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthAccessToken({ Iwe7OauthAccessToken: res.data });
      } else {
        return new AddFailIwe7OauthAccessToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthAccessTokens({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.AddIwe7OauthAccessTokens).pipe(
    map((res: AddIwe7OauthAccessTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'AddIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<Iwe7OauthAccessToken[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthAccessTokens({ Iwe7OauthAccessTokens: res.data });
      } else {
        return new AddFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthAccessTokens({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthAccessToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.UpsertIwe7OauthAccessToken).pipe(
    map((res: UpsertIwe7OauthAccessToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'UpsertIwe7OauthAccessToken', res)),
    map((res: Iwe7Response<Iwe7OauthAccessToken>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthAccessToken({ Iwe7OauthAccessToken: res.data });
      } else {
        return new UpsertFailIwe7OauthAccessToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthAccessToken({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.UpsertIwe7OauthAccessTokens).pipe(
    map((res: UpsertIwe7OauthAccessTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'UpsertIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<Iwe7OauthAccessToken[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthAccessTokens({ Iwe7OauthAccessTokens: res.data });
      } else {
        return new UpsertFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthAccessTokens({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthAccessToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.UpdateIwe7OauthAccessToken).pipe(
    map((res: UpdateIwe7OauthAccessToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'UpdateIwe7OauthAccessToken', res)),
    map((res: Iwe7Response<Update<Iwe7OauthAccessToken>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthAccessToken({ Iwe7OauthAccessToken: res.data });
      } else {
        return new UpdateFailIwe7OauthAccessToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthAccessToken({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.UpdateIwe7OauthAccessTokens).pipe(
    map((res: UpdateIwe7OauthAccessTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'UpdateIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<Update<Iwe7OauthAccessToken>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthAccessTokens({ Iwe7OauthAccessTokens: res.data });
      } else {
        return new UpdateFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthAccessTokens({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthAccessToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.DeleteIwe7OauthAccessToken).pipe(
    map((res: DeleteIwe7OauthAccessToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'DeleteIwe7OauthAccessToken', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthAccessToken({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthAccessToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthAccessToken({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.DeleteIwe7OauthAccessTokens).pipe(
    map((res: DeleteIwe7OauthAccessTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'DeleteIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthAccessTokens({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthAccessToken({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthAccessTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthAccessTokenActionTypes.ClearIwe7OauthAccessTokens).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthAccessToken', 'ClearIwe7OauthAccessTokens', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthAccessTokens();
      } else {
        return new ClearFailIwe7OauthAccessTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthAccessTokens({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
