import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7OauthCodes } from '../models/iwe7-oauth-codes.model';
import { Iwe7OauthCodesActions, Iwe7OauthCodesActionTypes } from '../actions/iwe7-oauth-codes.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7OauthCodes> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7OauthCodes> = createEntityAdapter<Iwe7OauthCodes>({
  selectId: (modal: Iwe7OauthCodes) => modal.id,
  sortComparer: (a: Iwe7OauthCodes, b: Iwe7OauthCodes) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7OauthCodesActions
): State {
  switch (action.type) {
    case Iwe7OauthCodesActionTypes.AddSuccessIwe7OauthCodes: {
      return adapter.addOne(action.payload.Iwe7OauthCodes, state);
    }

    case Iwe7OauthCodesActionTypes.UpsertSuccessIwe7OauthCodes: {
      return adapter.upsertOne(action.payload.Iwe7OauthCodes, state);
    }

    case Iwe7OauthCodesActionTypes.AddSuccessIwe7OauthCodess: {
      return adapter.addMany(action.payload.Iwe7OauthCodess, state);
    }

    case Iwe7OauthCodesActionTypes.UpsertSuccessIwe7OauthCodess: {
      return adapter.upsertMany(action.payload.Iwe7OauthCodess, state);
    }

    case Iwe7OauthCodesActionTypes.UpdateSuccessIwe7OauthCodes: {
      return adapter.updateOne(action.payload.Iwe7OauthCodes, state);
    }

    case Iwe7OauthCodesActionTypes.UpdateSuccessIwe7OauthCodess: {
      return adapter.updateMany(action.payload.Iwe7OauthCodess, state);
    }

    case Iwe7OauthCodesActionTypes.DeleteSuccessIwe7OauthCodes: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7OauthCodesActionTypes.SelectIwe7OauthCodes: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7OauthCodesActionTypes.DeleteSuccessIwe7OauthCodess: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7OauthCodesActionTypes.LoadSuccessIwe7OauthCodess: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7OauthCodess, state);
    }

    case Iwe7OauthCodesActionTypes.ClearSuccessIwe7OauthCodess: {
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

export const selectIwe7OauthCodesState = createFeatureSelector<State>('Iwe7OauthCodes');
export const selectIwe7OauthCodesIds = createSelector(
  selectIwe7OauthCodesState,
  selectIds
);
export const selectIwe7OauthCodesEntities = createSelector(
  selectIwe7OauthCodesState,
  selectEntities
);
export const selectAllIwe7OauthCodes = createSelector(
  selectIwe7OauthCodesState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7OauthCodesTotal = createSelector(
  selectIwe7OauthCodesState,
  selectTotal
);
export const getIwe7OauthCodesSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7OauthCodesId = createSelector(selectIwe7OauthCodesState, getIwe7OauthCodesSelectedId);

export const selectIwe7OauthCodesId = createSelector(
  selectIwe7OauthCodesEntities,
  selectCurrentIwe7OauthCodesId,
  (selectEntities, selectId) => selectEntities[selectId]
);
