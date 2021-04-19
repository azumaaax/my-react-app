import React from 'react';
import SYSTEM_CONST from '../../system_const';
import Button from '../atoms/button';
import _ from 'lodash';
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

const CompanyRow = params => {

  const {
    onClickEdit,
    onClickDelete,
    onClickLink,
    company,
  } = params.params;


  return (
    <>
      {
        _.map(company, (item ,key) =>
          <tr key={key}>
            <td>{item.id}</td>

            <td>
              <span
                data-link={SYSTEM_CONST.URL.COMPANY_INPUT}
                onClick={onClickLink}>{item.name}</span>
            </td>

            <td>
              <Button params={{text: '編集', onClick: () => onClickEdit({item: item.id}), }} />
              <Button params={{text: '削除', onClick: () => onClickDelete({item: item.id}), }} />
            </td>
          </tr>
        )
      }
    </>
  );
};


export default CompanyRow;
