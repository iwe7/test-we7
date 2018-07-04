import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthAccessToken } from '../models/iwe7-oauth-access-token.model';
import { Iwe7OauthAccessTokenActions, Iwe7OauthAccessTokenActionTypes } from '../actions/iwe7-oauth-access-token.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthAccessToken> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthAccessToken> = createEntityAdapter<Iwe7OauthAccessToken>({
  selectId: (modal: Iwe7OauthAccessToken) => modal.id,
  sortComparer: (a: Iwe7OauthAccessToken, b: Iwe7OauthAccessToken) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthAccessTokenActions
): State {
  switch (action.type) {
    case Iwe7OauthAccessTokenActionTypes.AddSuccessIwe7OauthAccessToken: {
      return adapter.addOne(action.payload.Iwe7OauthAccessToken, state);
    }

    case Iwe7OauthAccessTokenActionTypes.UpsertSuccessIwe7OauthAccessToken: {
      return adapter.upsertOne(action.payload.Iwe7OauthAccessToken, state);
    }

    case Iwe7OauthAccessTokenActionTypes.AddSuccessIwe7OauthAccessTokens: {
      return adapter.addMany(action.payload.Iwe7OauthAccessTokens, state);
    }

    case Iwe7OauthAccessTokenActionTypes.UpsertSuccessIwe7OauthAccessTokens: {
      return adapter.upsertMany(action.payload.Iwe7OauthAccessTokens, state);
    }

    case Iwe7OauthAccessTokenActionTypes.UpdateSuccessIwe7OauthAccessToken: {
      return adapter.updateOne(action.payload.Iwe7OauthAccessToken, state);
    }

    case Iwe7OauthAccessTokenActionTypes.UpdateSuccessIwe7OauthAccessTokens: {
      return adapter.updateMany(action.payload.Iwe7OauthAccessTokens, state);
    }

    case Iwe7OauthAccessTokenActionTypes.DeleteSuccessIwe7OauthAccessToken: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthAccessTokenActionTypes.SelectIwe7OauthAccessToken: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7OauthAccessTokenActionTypes.DeleteSuccessIwe7OauthAccessTokens: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthAccessTokenActionTypes.LoadSuccessIwe7OauthAccessTokens: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthAccessTokens, state);
    }

    case Iwe7OauthAccessTokenActionTypes.ClearSuccessIwe7OauthAccessTokens: {
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

export const selectIwe7OauthAccessTokenState = createFeatureSelector<State>('Iwe7OauthAccessToken');
export const selectIwe7OauthAccessTokenIds = createSelector(
  selectIwe7OauthAccessTokenState,
  selectIds
);
export const selectIwe7OauthAccessTokenEntities = createSelector(
  selectIwe7OauthAccessTokenState,
  selectEntities
);
export const selectAllIwe7OauthAccessToken = createSelector(
  selectIwe7OauthAccessTokenState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthAccessTokenTotal = createSelector(
  selectIwe7OauthAccessTokenState,
  selectTotal
);
export const getIwe7OauthAccessTokenSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthAccessTokenId = createSelector(selectIwe7OauthAccessTokenState, getIwe7OauthAccessTokenSelectedId);

export const selectIwe7OauthAccessTokenId = createSelector(
  selectIwe7OauthAccessTokenEntities,
  selectCurrentIwe7OauthAccessTokenId,
  (selectEntities, selectId) => selectEntities[selectId]
);
