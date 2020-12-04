import React from 'react';
import styles from './login.module.scss';
import SYSTEM_CONST from '../../system_const';


const Login = () => {

  // 認証
  const onClickLogin = () => {
    console.log('auth');
    location.href = SYSTEM_CONST.URL.TOP;
  };


  return (
    <>
      <h1 className={styles.title}>ログイン</h1>

      <dl className={styles.form}>
        <dt>id</dt>
        <dd><input type="text" placeholder="id" className="form-control" /></dd>
      </dl>

      <dl className={`${styles.form} `}>
        <dt>password</dt>
        <dd><input type="password" placeholder="password" className="form-control"/></dd>
      </dl>

      <div className={styles.box}>
        <button onClick={onClickLogin} className={`${styles.btn} btn btn-primary`}>ログイン</button>
      </div>
    </>
  );

};

export default Login;