import React, { useEffect, useState, } from 'react';
import styles from './login.module.scss';
import SYSTEM_CONST from '../../system_const';
import Button from '../atoms/button';
import { useDispatch } from 'react-redux';
import { useHistory, } from 'react-router-dom';

import {
  init,
  auth,
} from '../../modules/login';

/**
 * logger
 * https://github.com/pimterry/loglevel
 */
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);


const ID = {
  MIN: 1,
  MAX: 8,
};

const PASSWORD = {
  MIN: 1,
  MAX: 8,
};

const Login = () => {

  // logging
  log.debug('start');

  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setID] = useState('');
  const [password, setPASSWORD] = useState('');
  const [error, setERROR] = useState([]);

  // init
  useEffect( ()=> {
    dispatch(init());
  }, []);

  useEffect( ()=> {
    formValidation();
  }, [id, password]);


  // auth
  const onClickLogin = () => {
    const params = {
      id,
      password,
    };

    dispatch(auth(params));
    history.push(SYSTEM_CONST.URL.TOP);
  };


  // change
  const onChangeIDHandler = e =>
    setID(e.currentTarget.value);

  const onChangePASSWORDHandler = e =>
    setPASSWORD(e.currentTarget.value);


  // validation
  const formValidation = () => {
    const err = [];
    if (ID.MAX <= id.length) {
      err.push(`idは${ID.MAX}文字以下で入力してください`);
    }
    if (PASSWORD.MAX <= password.length) {
      err.push(`passwordは${PASSWORD.MAX}文字以下で入力してください`);
    }
    setERROR(err);
  };


  return (
    <>
      <h1 className={styles.title}>ログイン</h1>

      {
        error.map((val, key) => <p className={styles.warning} key={key}>{val}</p>)
      }


      <dl className={styles.form}>
        <dt>id</dt>
        <dd><input type="text" placeholder="id" className="form-control" onChange={onChangeIDHandler} /></dd>
      </dl>

      <dl className={`${styles.form} `}>
        <dt>password</dt>
        <dd><input type="password" placeholder="password" className="form-control" onChange={onChangePASSWORDHandler} /></dd>
      </dl>

      <div className={styles.box}>
        <Button params={{
          text: 'ログイン',
          onClick: onClickLogin,
          disabled: id.length <= 0 || password.length <= 0 ? true : false,
        }} />
      </div>
    </>
  );

};

export default Login;