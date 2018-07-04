import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthRefreshTokenActions,
  Iwe7OauthRefreshTokenActionTypes,
  LoadIwe7OauthRefreshTokens,
  LoadSuccessIwe7OauthRefreshTokens,
  LoadFailIwe7OauthRefreshTokens,
  AddIwe7OauthRefreshTokens,
  AddSuccessIwe7OauthRefreshTokens,
  AddFailIwe7OauthRefreshTokens,
  AddIwe7OauthRefreshToken,
  AddSuccessIwe7OauthRefreshToken,
  AddFailIwe7OauthRefreshToken,
  UpsertIwe7OauthRefreshToken,
  UpsertSuccessIwe7OauthRefreshToken,
  UpsertFailIwe7OauthRefreshToken,
  UpsertIwe7OauthRefreshTokens,
  UpsertSuccessIwe7OauthRefreshTokens,
  UpsertFailIwe7OauthRefreshTokens,
  UpdateIwe7OauthRefreshToken,
  UpdateSuccessIwe7OauthRefreshToken,
  UpdateFailIwe7OauthRefreshToken,
  UpdateIwe7OauthRefreshTokens,
  UpdateSuccessIwe7OauthRefreshTokens,
  UpdateFailIwe7OauthRefreshTokens,
  DeleteIwe7OauthRefreshToken,
  DeleteSuccessIwe7OauthRefreshToken,
  DeleteFailIwe7OauthRefreshToken,
  DeleteIwe7OauthRefreshTokens,
  DeleteSuccessIwe7OauthRefreshTokens,
  DeleteFailIwe7OauthRefreshTokens,
  ClearIwe7OauthRefreshTokens,
  ClearSuccessIwe7OauthRefreshTokens,
  ClearFailIwe7OauthRefreshTokens
} from '../actions/iwe7-oauth-refresh-token.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthRefreshToken } from '../models/iwe7-oauth-refresh-token.model';

@Injectable()
export class Iwe7OauthRefreshTokenEffects {
  @Effect()
  LoadIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.LoadIwe7OauthRefreshTokens).pipe(
    map((res: LoadIwe7OauthRefreshTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'LoadIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthRefreshToken[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthRefreshTokens({ Iwe7OauthRefreshTokens: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthRefreshToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.AddIwe7OauthRefreshToken).pipe(
    map((res: AddIwe7OauthRefreshToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'AddIwe7OauthRefreshToken', res)),
    map((res: Iwe7Response<Iwe7OauthRefreshToken>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthRefreshToken({ Iwe7OauthRefreshToken: res.data });
      } else {
        return new AddFailIwe7OauthRefreshToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.AddIwe7OauthRefreshTokens).pipe(
    map((res: AddIwe7OauthRefreshTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'AddIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<Iwe7OauthRefreshToken[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthRefreshTokens({ Iwe7OauthRefreshTokens: res.data });
      } else {
        return new AddFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthRefreshToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.UpsertIwe7OauthRefreshToken).pipe(
    map((res: UpsertIwe7OauthRefreshToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'UpsertIwe7OauthRefreshToken', res)),
    map((res: Iwe7Response<Iwe7OauthRefreshToken>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthRefreshToken({ Iwe7OauthRefreshToken: res.data });
      } else {
        return new UpsertFailIwe7OauthRefreshToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthRefreshToken({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.UpsertIwe7OauthRefreshTokens).pipe(
    map((res: UpsertIwe7OauthRefreshTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'UpsertIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<Iwe7OauthRefreshToken[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthRefreshTokens({ Iwe7OauthRefreshTokens: res.data });
      } else {
        return new UpsertFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthRefreshToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.UpdateIwe7OauthRefreshToken).pipe(
    map((res: UpdateIwe7OauthRefreshToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'UpdateIwe7OauthRefreshToken', res)),
    map((res: Iwe7Response<Update<Iwe7OauthRefreshToken>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthRefreshToken({ Iwe7OauthRefreshToken: res.data });
      } else {
        return new UpdateFailIwe7OauthRefreshToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthRefreshToken({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.UpdateIwe7OauthRefreshTokens).pipe(
    map((res: UpdateIwe7OauthRefreshTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'UpdateIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<Update<Iwe7OauthRefreshToken>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthRefreshTokens({ Iwe7OauthRefreshTokens: res.data });
      } else {
        return new UpdateFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthRefreshToken$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.DeleteIwe7OauthRefreshToken).pipe(
    map((res: DeleteIwe7OauthRefreshToken) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'DeleteIwe7OauthRefreshToken', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthRefreshToken({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthRefreshToken({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthRefreshToken({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.DeleteIwe7OauthRefreshTokens).pipe(
    map((res: DeleteIwe7OauthRefreshTokens) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'DeleteIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthRefreshTokens({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthRefreshToken({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthRefreshTokens$: Observable<Action> = this.actions$.ofType(Iwe7OauthRefreshTokenActionTypes.ClearIwe7OauthRefreshTokens).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthRefreshToken', 'ClearIwe7OauthRefreshTokens', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthRefreshTokens();
      } else {
        return new ClearFailIwe7OauthRefreshTokens({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthRefreshTokens({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
