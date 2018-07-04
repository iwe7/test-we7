import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthJwtActions,
  Iwe7OauthJwtActionTypes,
  LoadIwe7OauthJwts,
  LoadSuccessIwe7OauthJwts,
  LoadFailIwe7OauthJwts,
  AddIwe7OauthJwts,
  AddSuccessIwe7OauthJwts,
  AddFailIwe7OauthJwts,
  AddIwe7OauthJwt,
  AddSuccessIwe7OauthJwt,
  AddFailIwe7OauthJwt,
  UpsertIwe7OauthJwt,
  UpsertSuccessIwe7OauthJwt,
  UpsertFailIwe7OauthJwt,
  UpsertIwe7OauthJwts,
  UpsertSuccessIwe7OauthJwts,
  UpsertFailIwe7OauthJwts,
  UpdateIwe7OauthJwt,
  UpdateSuccessIwe7OauthJwt,
  UpdateFailIwe7OauthJwt,
  UpdateIwe7OauthJwts,
  UpdateSuccessIwe7OauthJwts,
  UpdateFailIwe7OauthJwts,
  DeleteIwe7OauthJwt,
  DeleteSuccessIwe7OauthJwt,
  DeleteFailIwe7OauthJwt,
  DeleteIwe7OauthJwts,
  DeleteSuccessIwe7OauthJwts,
  DeleteFailIwe7OauthJwts,
  ClearIwe7OauthJwts,
  ClearSuccessIwe7OauthJwts,
  ClearFailIwe7OauthJwts
} from '../actions/iwe7-oauth-jwt.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthJwt } from '../models/iwe7-oauth-jwt.model';

@Injectable()
export class Iwe7OauthJwtEffects {
  @Effect()
  LoadIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.LoadIwe7OauthJwts).pipe(
    map((res: LoadIwe7OauthJwts) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'LoadIwe7OauthJwts', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthJwt[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthJwts({ Iwe7OauthJwts: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthJwts({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthJwt$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.AddIwe7OauthJwt).pipe(
    map((res: AddIwe7OauthJwt) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'AddIwe7OauthJwt', res)),
    map((res: Iwe7Response<Iwe7OauthJwt>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthJwt({ Iwe7OauthJwt: res.data });
      } else {
        return new AddFailIwe7OauthJwt({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthJwts({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.AddIwe7OauthJwts).pipe(
    map((res: AddIwe7OauthJwts) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'AddIwe7OauthJwts', res)),
    map((res: Iwe7Response<Iwe7OauthJwt[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthJwts({ Iwe7OauthJwts: res.data });
      } else {
        return new AddFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthJwts({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthJwt$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.UpsertIwe7OauthJwt).pipe(
    map((res: UpsertIwe7OauthJwt) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'UpsertIwe7OauthJwt', res)),
    map((res: Iwe7Response<Iwe7OauthJwt>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthJwt({ Iwe7OauthJwt: res.data });
      } else {
        return new UpsertFailIwe7OauthJwt({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthJwt({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.UpsertIwe7OauthJwts).pipe(
    map((res: UpsertIwe7OauthJwts) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'UpsertIwe7OauthJwts', res)),
    map((res: Iwe7Response<Iwe7OauthJwt[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthJwts({ Iwe7OauthJwts: res.data });
      } else {
        return new UpsertFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthJwts({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthJwt$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.UpdateIwe7OauthJwt).pipe(
    map((res: UpdateIwe7OauthJwt) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'UpdateIwe7OauthJwt', res)),
    map((res: Iwe7Response<Update<Iwe7OauthJwt>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthJwt({ Iwe7OauthJwt: res.data });
      } else {
        return new UpdateFailIwe7OauthJwt({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthJwt({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.UpdateIwe7OauthJwts).pipe(
    map((res: UpdateIwe7OauthJwts) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'UpdateIwe7OauthJwts', res)),
    map((res: Iwe7Response<Update<Iwe7OauthJwt>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthJwts({ Iwe7OauthJwts: res.data });
      } else {
        return new UpdateFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthJwts({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthJwt$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.DeleteIwe7OauthJwt).pipe(
    map((res: DeleteIwe7OauthJwt) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'DeleteIwe7OauthJwt', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthJwt({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthJwt({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthJwt({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.DeleteIwe7OauthJwts).pipe(
    map((res: DeleteIwe7OauthJwts) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'DeleteIwe7OauthJwts', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthJwts({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthJwt({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthJwts$: Observable<Action> = this.actions$.ofType(Iwe7OauthJwtActionTypes.ClearIwe7OauthJwts).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthJwt', 'ClearIwe7OauthJwts', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthJwts();
      } else {
        return new ClearFailIwe7OauthJwts({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthJwts({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
