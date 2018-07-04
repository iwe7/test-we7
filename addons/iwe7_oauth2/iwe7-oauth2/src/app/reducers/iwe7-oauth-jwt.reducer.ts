import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthJwt } from '../models/iwe7-oauth-jwt.model';
import { Iwe7OauthJwtActions, Iwe7OauthJwtActionTypes } from '../actions/iwe7-oauth-jwt.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthJwt> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthJwt> = createEntityAdapter<Iwe7OauthJwt>({
  selectId: (modal: Iwe7OauthJwt) => modal.id,
  sortComparer: (a: Iwe7OauthJwt, b: Iwe7OauthJwt) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthJwtActions
): State {
  switch (action.type) {
    case Iwe7OauthJwtActionTypes.AddSuccessIwe7OauthJwt: {
      return adapter.addOne(action.payload.Iwe7OauthJwt, state);
    }

    case Iwe7OauthJwtActionTypes.UpsertSuccessIwe7OauthJwt: {
      return adapter.upsertOne(action.payload.Iwe7OauthJwt, state);
    }

    case Iwe7OauthJwtActionTypes.AddSuccessIwe7OauthJwts: {
      return adapter.addMany(action.payload.Iwe7OauthJwts, state);
    }

    case Iwe7OauthJwtActionTypes.UpsertSuccessIwe7OauthJwts: {
      return adapter.upsertMany(action.payload.Iwe7OauthJwts, state);
    }

    case Iwe7OauthJwtActionTypes.UpdateSuccessIwe7OauthJwt: {
      return adapter.updateOne(action.payload.Iwe7OauthJwt, state);
    }

    case Iwe7OauthJwtActionTypes.UpdateSuccessIwe7OauthJwts: {
      return adapter.updateMany(action.payload.Iwe7OauthJwts, state);
    }

    case Iwe7OauthJwtActionTypes.DeleteSuccessIwe7OauthJwt: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthJwtActionTypes.SelectIwe7OauthJwt: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7OauthJwtActionTypes.DeleteSuccessIwe7OauthJwts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthJwtActionTypes.LoadSuccessIwe7OauthJwts: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthJwts, state);
    }

    case Iwe7OauthJwtActionTypes.ClearSuccessIwe7OauthJwts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
} = adapter.getSelectors();

export const selectIwe7OauthJwtState = createFeatureSelector<State>('Iwe7OauthJwt');
export const selectIwe7OauthJwtIds = createSelector(
  selectIwe7OauthJwtState,
  selectIds
);
export const selectIwe7OauthJwtEntities = createSelector(
  selectIwe7OauthJwtState,
  selectEntities
);
export const selectAllIwe7OauthJwt = createSelector(
  selectIwe7OauthJwtState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthJwtTotal = createSelector(
  selectIwe7OauthJwtState,
  selectTotal
);
export const getIwe7OauthJwtSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthJwtId = createSelector(selectIwe7OauthJwtState, getIwe7OauthJwtSelectedId);

export const selectIwe7OauthJwtId = createSelector(
  selectIwe7OauthJwtEntities,
  selectCurrentIwe7OauthJwtId,
  (selectEntities, selectId) => selectEntities[selectId]
);
