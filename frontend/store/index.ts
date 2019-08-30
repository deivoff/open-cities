import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { modalsReducer } from './modals/reducers';
import { ICitySchema } from '../../server/components/city/types';
import { IUserSchema } from '../../server/components/user/types';
import { IModal } from './modals/types';

export interface IGlobalStore {
  modals: IModal[];
  cities: ICitySchema[];
  profile: IUserSchema;
}

const rootReducer = combineReducers({
  modals: modalsReducer,
  cities: (state: ICitySchema[] = []): ICitySchema[] => state,
  profile: (state: IUserSchema = {}): IUserSchema => state
});

const reducerInitializedStore = createStore(rootReducer).getState();

const middleware = [thunk, createLogger()];

export const initializeStore = (store = reducerInitializedStore) => {
  return createStore(
    rootReducer,
    store,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};
