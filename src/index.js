import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './modules/reducers';
import { createLogger } from 'redux-logger';

const middlewares = [
  thunk,
  createLogger({
    diff: true,
    collapsed: true,
  }),
];

const rootReducer = (state, action) =>
  reducers(state, action);

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
