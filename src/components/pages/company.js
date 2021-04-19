import React, { useEffect, } from 'react';
import SYSTEM_CONST from '../../system_const';
import styles from './company.module.scss';
import { useHistory, } from 'react-router-dom';
import Navi from '../templates/navi';
import Button from '../atoms/button';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  init,
  del,
} from '../../modules/company';

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

  const history = useHistory();

  // anchor link
  const onClickLink = e =>
    history.push(e.currentTarget.dataset.link);

  // edit
  const onClickEdit = (params) => {
    log.debug(params);
    dispatch(init(params));
    history.push(SYSTEM_CONST.URL.COMPANY_INPUT);
  };

  // delete
  const onClickDelete = (params) => {
    log.debug(params);
    dispatch(del(params));
  };

  let list = [];
  for (const i in company) {
    list.push(
      <tr>
        <td>{company[i].id}</td>
        <td>
          <span data-link={SYSTEM_CONST.URL.COMPANY_INPUT} onClick={onClickLink}>
            {company[i].name}
          </span>
        </td>
        <td>
          <Button params={{
            text: '編集',
            onClick: onClickEdit({id:company[i].id}),
          }} />
          <Button params={{
            text: '削除',
            onClick: onClickDelete({id:company[i].id}),
          }} />
        </td>
      </tr>
    );
  }

  return (
    <>
      <h1 className={styles.title}>company</h1>
      <Navi />
      <div>
        企業のページ
      </div>
      <table className={styles.list}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th></th>
        </tr>
        {list}
      </table>
    </>
  );
};

export default Company;
