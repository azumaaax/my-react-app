import React, { useEffect, } from 'react';
import Single from '../templates/single';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
} from '../../modules/top';

const Top = () => {

  const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  // init
  useEffect( ()=> {
    dispatch(init());
  }, []);


  return (
    <Single params={{
      title: 'top',
      context: `id: ${login.id} / pass: ${login.password}`,
    }} />
  );
};

export default Top;