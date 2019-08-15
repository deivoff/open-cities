import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { modalsReducer } from './modals/reducers';
import { ICitySchema } from '../../server/components/city/ICity';

const rootReducer = combineReducers({
  modals: modalsReducer,
  cities: (state: ICitySchema[] = []): ICitySchema[] => state
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
