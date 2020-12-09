import React, { useEffect, } from 'react';
import Single from '../templates/single';

import {
  // useDispatch,
  useSelector,
} from 'react-redux';

// import {
//   init,
// } from '../../modules/top';

const Top = () => {

  // const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  // init
  useEffect( ()=> {
    // dispatch(init());
    console.log(login);
  }, []);
  

  return (
    <Single params={{
      title: 'top',
      context: 'ログイン後のトップページ',
    }} />
  );
};

export default Top;