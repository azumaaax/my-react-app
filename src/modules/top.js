
// Actions
const dataname = 'TOP';
const INIT = `${dataname}/INIT`;


// Action Creator
export function init() {
  return dispatch => {
    try {
      const data = {  };

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



// Reducer
export default function topReducer(state = {}, action) {

  switch (action.type) {
  case INIT: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
}
