import React, { useEffect, } from 'react';
import Single from '../templates/single';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
} from '../../modules/top';

const Company = () => {

  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

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