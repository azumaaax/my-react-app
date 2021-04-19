import React, { useEffect, } from 'react';
import List from '../../templates/list';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
} from '../../../modules/company';

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
    <List params={{
      title: 'company',
      context: '企業のページ',
      data: company,
    }} />

  );
};

export default Company;
