import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthClients } from '../models/iwe7-oauth-clients.model';
import { Iwe7OauthClientsActions, Iwe7OauthClientsActionTypes } from '../actions/iwe7-oauth-clients.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthClients> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthClients> = createEntityAdapter<Iwe7OauthClients>({
  selectId: (modal: Iwe7OauthClients) => modal.client_id,
  sortComparer: (a: Iwe7OauthClients, b: Iwe7OauthClients) => a.client_id.localeCompare(b.client_id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthClientsActions
): State {
  switch (action.type) {
    case Iwe7OauthClientsActionTypes.AddSuccessIwe7OauthClients: {
      return adapter.addOne(action.payload.Iwe7OauthClients, state);
    }

    case Iwe7OauthClientsActionTypes.UpsertSuccessIwe7OauthClients: {
      return adapter.upsertOne(action.payload.Iwe7OauthClients, state);
    }

    case Iwe7OauthClientsActionTypes.AddSuccessIwe7OauthClientss: {
      return adapter.addMany(action.payload.Iwe7OauthClientss, state);
    }

    case Iwe7OauthClientsActionTypes.UpsertSuccessIwe7OauthClientss: {
      return adapter.upsertMany(action.payload.Iwe7OauthClientss, state);
    }

    case Iwe7OauthClientsActionTypes.UpdateSuccessIwe7OauthClients: {
      return adapter.updateOne(action.payload.Iwe7OauthClients, state);
    }

    case Iwe7OauthClientsActionTypes.UpdateSuccessIwe7OauthClientss: {
      return adapter.updateMany(action.payload.Iwe7OauthClientss, state);
    }

    case Iwe7OauthClientsActionTypes.DeleteSuccessIwe7OauthClients: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthClientsActionTypes.SelectIwe7OauthClients: {
      return { ...state, selectId: action.payload.id };
    }

    case Iwe7OauthClientsActionTypes.DeleteSuccessIwe7OauthClientss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthClientsActionTypes.LoadSuccessIwe7OauthClientss: {
      state = { ...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthClientss, state);
    }

    case Iwe7OauthClientsActionTypes.ClearSuccessIwe7OauthClientss: {
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

export const selectIwe7OauthClientsState = createFeatureSelector<State>('Iwe7OauthClients');
export const selectIwe7OauthClientsIds = createSelector(
  selectIwe7OauthClientsState,
  selectIds
);
export const selectIwe7OauthClientsEntities = createSelector(
  selectIwe7OauthClientsState,
  selectEntities
);
export const selectAllIwe7OauthClients = createSelector(
  selectIwe7OauthClientsState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthClientsTotal = createSelector(
  selectIwe7OauthClientsState,
  selectTotal
);
export const getIwe7OauthClientsSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthClientsId = createSelector(selectIwe7OauthClientsState, getIwe7OauthClientsSelectedId);

export const selectIwe7OauthClientsId = createSelector(
  selectIwe7OauthClientsEntities,
  selectCurrentIwe7OauthClientsId,
  (selectEntities, selectId) => selectEntities[selectId]
);
