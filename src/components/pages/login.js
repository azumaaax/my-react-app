import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import SYSTEM_CONST from '../../system_const';
import Button from '../atoms/button';

const ID = {
  MIN: 1,
  MAX: 8,
};

const Login = () => {

  const [id, setID] = useState('');


  // init
  useEffect( ()=> {
    console.log('change id');
  }, [id]);


  // auth
  const onClickLogin = () => {
    location.href = SYSTEM_CONST.URL.TOP;
  };


  // change
  const onChangeIDHandler = e =>
    setID(e.currentTarget.value);


  return (
    <>
      <h1 className={styles.title}>ログイン</h1>


      {
        ID.MAX <= id.length ?
          <p className={styles.warning}>{ID.MAX}文字以下で入力してください</p> :
          ''
      }
      

      <dl className={styles.form}>
        <dt>id</dt>
        <dd><input type="text" placeholder="id" className="form-control" onChange={onChangeIDHandler} /></dd>
      </dl>

      <dl className={`${styles.form} `}>
        <dt>password</dt>
        <dd><input type="password" placeholder="password" className="form-control" /></dd>
      </dl>

      <div className={styles.box}>
        <Button params={{
          text: 'ログイン',
          onClick: onClickLogin,
        }} />
      </div>
    </>
  );

};

export default Login;