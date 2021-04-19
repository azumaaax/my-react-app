import { api } from './apiConfigure';
import SYSTEM_CONST from '../system_const';

export function getUser(params) {

  return api (
    SYSTEM_CONST.API.USER,
    params
  );
}

export async function getCompany(params) {

  const res = await api (
    SYSTEM_CONST.API.COMPANY,
    params
  );

  return res;
}

export async function addCompany(params) {

  const res = await api (
    SYSTEM_CONST.API.COMPANY_POST,
    params
  );

  return res;
}

export async function editCompany(params) {

  const res = await api (
    SYSTEM_CONST.API.COMPANY_PUT,
    params
  );

  return res;
}

export async function deleteCompany(params) {

  const res = await api (
    SYSTEM_CONST.API.COMPANY_DELETE,
    params
  );

  return res;
}
