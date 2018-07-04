import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthRefreshToken } from '../models/iwe7-oauth-refresh-token.model';
import { Iwe7OauthRefreshTokenActions, Iwe7OauthRefreshTokenActionTypes } from '../actions/iwe7-oauth-refresh-token.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthRefreshToken> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthRefreshToken> = createEntityAdapter<Iwe7OauthRefreshToken>({
  selectId: (modal: Iwe7OauthRefreshToken) => modal.id,
  sortComparer: (a: Iwe7OauthRefreshToken, b: Iwe7OauthRefreshToken) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthRefreshTokenActions
): State {
  switch (action.type) {
    case Iwe7OauthRefreshTokenActionTypes.AddSuccessIwe7OauthRefreshToken: {
      return adapter.addOne(action.payload.Iwe7OauthRefreshToken, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.UpsertSuccessIwe7OauthRefreshToken: {
      return adapter.upsertOne(action.payload.Iwe7OauthRefreshToken, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.AddSuccessIwe7OauthRefreshTokens: {
      return adapter.addMany(action.payload.Iwe7OauthRefreshTokens, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.UpsertSuccessIwe7OauthRefreshTokens: {
      return adapter.upsertMany(action.payload.Iwe7OauthRefreshTokens, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.UpdateSuccessIwe7OauthRefreshToken: {
      return adapter.updateOne(action.payload.Iwe7OauthRefreshToken, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.UpdateSuccessIwe7OauthRefreshTokens: {
      return adapter.updateMany(action.payload.Iwe7OauthRefreshTokens, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.DeleteSuccessIwe7OauthRefreshToken: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.SelectIwe7OauthRefreshToken: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7OauthRefreshTokenActionTypes.DeleteSuccessIwe7OauthRefreshTokens: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.LoadSuccessIwe7OauthRefreshTokens: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthRefreshTokens, state);
    }

    case Iwe7OauthRefreshTokenActionTypes.ClearSuccessIwe7OauthRefreshTokens: {
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

export const selectIwe7OauthRefreshTokenState = createFeatureSelector<State>('Iwe7OauthRefreshToken');
export const selectIwe7OauthRefreshTokenIds = createSelector(
  selectIwe7OauthRefreshTokenState,
  selectIds
);
export const selectIwe7OauthRefreshTokenEntities = createSelector(
  selectIwe7OauthRefreshTokenState,
  selectEntities
);
export const selectAllIwe7OauthRefreshToken = createSelector(
  selectIwe7OauthRefreshTokenState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthRefreshTokenTotal = createSelector(
  selectIwe7OauthRefreshTokenState,
  selectTotal
);
export const getIwe7OauthRefreshTokenSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthRefreshTokenId = createSelector(selectIwe7OauthRefreshTokenState, getIwe7OauthRefreshTokenSelectedId);

export const selectIwe7OauthRefreshTokenId = createSelector(
  selectIwe7OauthRefreshTokenEntities,
  selectCurrentIwe7OauthRefreshTokenId,
  (selectEntities, selectId) => selectEntities[selectId]
);
