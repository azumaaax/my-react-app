import React, { useEffect, } from 'react';
import Single from '../templates/single';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
} from '../../modules/company';

const Company = () => {

  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

  console.log(company);
  
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