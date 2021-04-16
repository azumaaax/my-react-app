import axiosBase from 'axios';
import log from 'loglevel';
log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL);

/**
 * 共通 - 設定
 */
const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
});

/**
 * 共通 - 送信前処理
 * @params {object} config
 */
axios.interceptors.request.use((config) => {
  log.debug('interceptors.request');
  return config;
});

/**
 * 共通 - レスポンス処理
 * @params {object} config
 */
axios.interceptors.response.use((response) => {
  log.debug('interceptors.response');
  return response;
});


/**
 * API call
 */
export const api = async (data, params = {}, callback) => {

  let req = {};
  if (data.method === 'get') {
    req = {
      method: data.method,
      url: data.path,
      params,
    };
  }

  if (data.method === 'post') {
    req = {
      method: data.method,
      url: data.path,
      data: params,
    };
  }

  // run
  return await axios(req)
    .then(res => {

      return callback ?
        callback():
        res.data;

    })
    .catch(err => log.warn(err));
};
