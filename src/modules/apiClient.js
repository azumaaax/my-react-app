import { api } from './apiConfigure';
import SYSTEM_CONST from '../system_const';

export function getUser(params) {

  api (
    SYSTEM_CONST.API.USER,
    params
  );
}