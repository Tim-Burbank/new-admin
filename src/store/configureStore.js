import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import promiseMiddleware from '../middlewares/promiseMiddleware'

import user from '../reducers/settings/user';

import * as common from '../reducers/common';

import {reducer as formReducer} from 'redux-form';

const logger = createLogger();
const reducer = combineReducers(
    {
  user,
  ...common,
  form:formReducer
});
const Middleware=[thunkMiddleware,logger]
const createStoreWithMiddleware = compose(applyMiddleware(
    ...Middleware
  //promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']})
))(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState,window.devToolsExtension && window.devToolsExtension());
}
