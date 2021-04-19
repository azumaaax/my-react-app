
import { getCompany, deleteCompany } from '../modules/apiClient';
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

// Actions
const dataname = 'COMPANY';
const INIT = `${dataname}/INIT`;


// Action Creator
export function init(param = {}) {
  return async (dispatch) => {
    try {

      // const data = await getCompany({id: 1,});
      log.debug(param);
      const data = await getCompany(param);
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

// Action Creator
export function del(param = {}) {
  return async (dispatch) => {
    try {

      log.debug(param);
      const data = await deleteCompany(param);

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
