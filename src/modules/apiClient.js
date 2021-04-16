import { api } from './apiConfigure';
import SYSTEM_CONST from '../system_const';

export function getUser(params) {

  api (
    SYSTEM_CONST.API.USER,
    params
  );
}

export function getCompany(params) {

  return api (
    SYSTEM_CONST.API.COMPANY,
    params
  );
}
