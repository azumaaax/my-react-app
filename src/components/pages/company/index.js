import React, { useEffect, } from 'react';
import SYSTEM_CONST from '../../../system_const';
import styles from './index.module.scss';
import { useHistory, } from 'react-router-dom';
import Navi from '../../templates/navi';
import CompanyRow from '../../organisms/companyRow';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
  del,
} from '../../../modules/company';

import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

const Company = () => {

  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

  // init
  useEffect( ()=> {
    dispatch(init());
  }, []);

  const history = useHistory();

  // anchor link
  const onClickLink = e =>
    history.push(e.currentTarget.dataset.link);

  // edit
  const onClickEdit = (params) => {
    log.debug(params);
    dispatch(init(params));
    history.push(SYSTEM_CONST.URL.COMPANY_REGIST);
  };

  // delete
  const onClickDelete = (params) => {
    log.debug(params);
    dispatch(del(params));
  };


  return (
    <>
      <h1 className={styles.title}>company</h1>

      <Navi />

      <table className={styles.list}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <CompanyRow params={{
            onClickEdit,
            onClickDelete,
            onClickLink,
            company,
          }} />
        </tbody>
      </table>
    </>
  );
};

export default Company;
