import { combineReducers } from 'redux';
import loginReducer from './login';
import topReducer from './top';
import companyReducer from './company';

const reducers = combineReducers({
  // key: keyReducer,
  login: loginReducer,
  top: topReducer,
  company: companyReducer,
});

export default reducers;
