import React from 'react';
import SYSTEM_CONST from '../../system_const';
import styles from './navi.module.scss';
import { useHistory, } from 'react-router-dom';

const Navi = () => {

  const history = useHistory();

  // anchor link
  const onClickLink = e =>
    history.push(e.currentTarget.dataset.link);


  return (
    <ul className={styles.navi}>
      <li><span data-link={SYSTEM_CONST.URL.TOP}     onClick={onClickLink}>top</span></li>
      <li><span data-link={SYSTEM_CONST.URL.CONFIRM} onClick={onClickLink}>confirm</span></li>
      <li><span data-link={SYSTEM_CONST.URL.ABOUT}   onClick={onClickLink}>about</span></li>
      <li><span data-link={SYSTEM_CONST.URL.LOGIN}   onClick={onClickLink}>ログアウト</span></li>
    </ul>
  );

};

export default Navi;