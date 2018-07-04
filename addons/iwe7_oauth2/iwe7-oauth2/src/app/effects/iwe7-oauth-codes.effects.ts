import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7OauthCodesActions,
  Iwe7OauthCodesActionTypes,
  LoadIwe7OauthCodess,
  LoadSuccessIwe7OauthCodess,
  LoadFailIwe7OauthCodess,
  AddIwe7OauthCodess,
  AddSuccessIwe7OauthCodess,
  AddFailIwe7OauthCodess,
  AddIwe7OauthCodes,
  AddSuccessIwe7OauthCodes,
  AddFailIwe7OauthCodes,
  UpsertIwe7OauthCodes,
  UpsertSuccessIwe7OauthCodes,
  UpsertFailIwe7OauthCodes,
  UpsertIwe7OauthCodess,
  UpsertSuccessIwe7OauthCodess,
  UpsertFailIwe7OauthCodess,
  UpdateIwe7OauthCodes,
  UpdateSuccessIwe7OauthCodes,
  UpdateFailIwe7OauthCodes,
  UpdateIwe7OauthCodess,
  UpdateSuccessIwe7OauthCodess,
  UpdateFailIwe7OauthCodess,
  DeleteIwe7OauthCodes,
  DeleteSuccessIwe7OauthCodes,
  DeleteFailIwe7OauthCodes,
  DeleteIwe7OauthCodess,
  DeleteSuccessIwe7OauthCodess,
  DeleteFailIwe7OauthCodess,
  ClearIwe7OauthCodess,
  ClearSuccessIwe7OauthCodess,
  ClearFailIwe7OauthCodess
} from '../actions/iwe7-oauth-codes.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7OauthCodes } from '../models/iwe7-oauth-codes.model';

@Injectable()
export class Iwe7OauthCodesEffects {
  @Effect()
  LoadIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.LoadIwe7OauthCodess).pipe(
    map((res: LoadIwe7OauthCodess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'LoadIwe7OauthCodess', res)),
    map((res: Iwe7Response<{ list: Iwe7OauthCodes[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7OauthCodess({ Iwe7OauthCodess: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthCodess({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthCodes$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.AddIwe7OauthCodes).pipe(
    map((res: AddIwe7OauthCodes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'AddIwe7OauthCodes', res)),
    map((res: Iwe7Response<Iwe7OauthCodes>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthCodes({ Iwe7OauthCodes: res.data });
      } else {
        return new AddFailIwe7OauthCodes({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthCodess({ msg: err }))),
  );
  @Effect()
  AddIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.AddIwe7OauthCodess).pipe(
    map((res: AddIwe7OauthCodess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'AddIwe7OauthCodess', res)),
    map((res: Iwe7Response<Iwe7OauthCodes[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7OauthCodess({ Iwe7OauthCodess: res.data });
      } else {
        return new AddFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7OauthCodess({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthCodes$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.UpsertIwe7OauthCodes).pipe(
    map((res: UpsertIwe7OauthCodes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'UpsertIwe7OauthCodes', res)),
    map((res: Iwe7Response<Iwe7OauthCodes>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthCodes({ Iwe7OauthCodes: res.data });
      } else {
        return new UpsertFailIwe7OauthCodes({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthCodes({ msg: err }))),
  );
  @Effect()
  UpsertIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.UpsertIwe7OauthCodess).pipe(
    map((res: UpsertIwe7OauthCodess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'UpsertIwe7OauthCodess', res)),
    map((res: Iwe7Response<Iwe7OauthCodes[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7OauthCodess({ Iwe7OauthCodess: res.data });
      } else {
        return new UpsertFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7OauthCodess({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthCodes$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.UpdateIwe7OauthCodes).pipe(
    map((res: UpdateIwe7OauthCodes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'UpdateIwe7OauthCodes', res)),
    map((res: Iwe7Response<Update<Iwe7OauthCodes>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthCodes({ Iwe7OauthCodes: res.data });
      } else {
        return new UpdateFailIwe7OauthCodes({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthCodes({ msg: err }))),
  );
  @Effect()
  UpdateIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.UpdateIwe7OauthCodess).pipe(
    map((res: UpdateIwe7OauthCodess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'UpdateIwe7OauthCodess', res)),
    map((res: Iwe7Response<Update<Iwe7OauthCodes>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7OauthCodess({ Iwe7OauthCodess: res.data });
      } else {
        return new UpdateFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7OauthCodess({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthCodes$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.DeleteIwe7OauthCodes).pipe(
    map((res: DeleteIwe7OauthCodes) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'DeleteIwe7OauthCodes', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthCodes({ id: res.data });
      } else {
        return new DeleteFailIwe7OauthCodes({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthCodes({ msg: err }))),
  );
  @Effect()
  DeleteIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.DeleteIwe7OauthCodess).pipe(
    map((res: DeleteIwe7OauthCodess) => res.payload),
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'DeleteIwe7OauthCodess', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7OauthCodess({ ids: res.data });
      } else {
        return new DeleteFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7OauthCodes({ msg: err }))),
  );
  @Effect()
  ClearIwe7OauthCodess$: Observable<Action> = this.actions$.ofType(Iwe7OauthCodesActionTypes.ClearIwe7OauthCodess).pipe(
    switchMap(res => this.util.wpost('Iwe7OauthCodes', 'ClearIwe7OauthCodess', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7OauthCodess();
      } else {
        return new ClearFailIwe7OauthCodess({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7OauthCodess({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
