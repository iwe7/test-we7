import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthScopes } from '../models/iwe7-oauth-scopes.model';
import { Iwe7OauthScopesActions, Iwe7OauthScopesActionTypes } from '../actions/iwe7-oauth-scopes.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthScopes> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthScopes> = createEntityAdapter<Iwe7OauthScopes>({
  selectId: (modal: Iwe7OauthScopes) => modal.id,
  sortComparer: (a: Iwe7OauthScopes, b: Iwe7OauthScopes) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthScopesActions
): State {
  switch (action.type) {
    case Iwe7OauthScopesActionTypes.AddSuccessIwe7OauthScopes: {
      return adapter.addOne(action.payload.Iwe7OauthScopes, state);
    }

    case Iwe7OauthScopesActionTypes.UpsertSuccessIwe7OauthScopes: {
      return adapter.upsertOne(action.payload.Iwe7OauthScopes, state);
    }

    case Iwe7OauthScopesActionTypes.AddSuccessIwe7OauthScopess: {
      return adapter.addMany(action.payload.Iwe7OauthScopess, state);
    }

    case Iwe7OauthScopesActionTypes.UpsertSuccessIwe7OauthScopess: {
      return adapter.upsertMany(action.payload.Iwe7OauthScopess, state);
    }

    case Iwe7OauthScopesActionTypes.UpdateSuccessIwe7OauthScopes: {
      return adapter.updateOne(action.payload.Iwe7OauthScopes, state);
    }

    case Iwe7OauthScopesActionTypes.UpdateSuccessIwe7OauthScopess: {
      return adapter.updateMany(action.payload.Iwe7OauthScopess, state);
    }

    case Iwe7OauthScopesActionTypes.DeleteSuccessIwe7OauthScopes: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthScopesActionTypes.SelectIwe7OauthScopes: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7OauthScopesActionTypes.DeleteSuccessIwe7OauthScopess: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthScopesActionTypes.LoadSuccessIwe7OauthScopess: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthScopess, state);
    }

    case Iwe7OauthScopesActionTypes.ClearSuccessIwe7OauthScopess: {
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

export const selectIwe7OauthScopesState = createFeatureSelector<State>('Iwe7OauthScopes');
export const selectIwe7OauthScopesIds = createSelector(
  selectIwe7OauthScopesState,
  selectIds
);
export const selectIwe7OauthScopesEntities = createSelector(
  selectIwe7OauthScopesState,
  selectEntities
);
export const selectAllIwe7OauthScopes = createSelector(
  selectIwe7OauthScopesState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthScopesTotal = createSelector(
  selectIwe7OauthScopesState,
  selectTotal
);
export const getIwe7OauthScopesSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthScopesId = createSelector(selectIwe7OauthScopesState, getIwe7OauthScopesSelectedId);

export const selectIwe7OauthScopesId = createSelector(
  selectIwe7OauthScopesEntities,
  selectCurrentIwe7OauthScopesId,
  (selectEntities, selectId) => selectEntities[selectId]
);
