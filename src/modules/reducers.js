import { combineReducers } from 'redux';
import loginReducer from './login';
import topReducer from './top';

const reducers = combineReducers({
  // key: keyReducer,
  login: loginReducer,
  top: topReducer,
});

export default reducers;
