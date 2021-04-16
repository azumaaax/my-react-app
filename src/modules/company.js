
import { getCompany } from '../modules/apiClient';
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

// Actions
const dataname = 'COMPANY';
const INIT = `${dataname}/INIT`;


// Action Creator
export function init() {
  return async (dispatch) => {
    try {

      // const data = await getCompany({id: 1,});
      const data = await getCompany();
      log.debug(data);

      const action = {
        type: INIT,
        payload: data,
      };

      dispatch(action);

    } catch(err) {
      console.error(err);
    }
  };
}



// Reducer
export default function companyReducer(state = {}, action) {

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
