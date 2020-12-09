
// Actions
const dataname = 'LOGIN';
const INIT = `${dataname}/INIT`;
const AUTH = `${dataname}/AUTH`;


// Action Creator
export function init() {
  return dispatch => {
    try {
      const data = { auth: false, };

      const action = {
        type: INIT,
        payload: data
      };

      dispatch(action);

    } catch(err) {
      console.error(err);
    }
  };
}


export function auth(params) {
  console.log({params});

  return dispatch => {
    try {
      const data = {
        auth : true,
        ...params,
      };

      const action = {
        type: AUTH,
        payload: data
      };

      dispatch(action);

    } catch (err) {
      // エラー処理
      console.error(err);
    }
  };
}



// Reducer
export default function loginReducer(state = {}, action) {

  switch (action.type) {
  case INIT: {
    return {
      ...state,
      ...action.payload,
    };
  }
  case AUTH: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
}
