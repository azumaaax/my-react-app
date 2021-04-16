import React, { useEffect, } from 'react';
import Single from '../templates/single';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
} from '../../modules/company';

/**
 * logger
 * https://github.com/pimterry/loglevel
 */
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

const Company = () => {

  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

  log.debug(company);

  // init
  useEffect( ()=> {
    dispatch(init());
  }, []);

  return (
    <Single params={{
      title: 'company',
      context: '企業のページ',
      list: company,
    }} />

  );
};

export default Company;
