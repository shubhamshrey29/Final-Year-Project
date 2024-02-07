import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCitiesReducer, getCityDetailsReducer } from './reducers/cityReducer.js';

const reducer = combineReducers({
  getCities: getCitiesReducer,
  getCityDetails: getCityDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
