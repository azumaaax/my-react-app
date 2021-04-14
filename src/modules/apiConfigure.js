import axiosBase from 'axios';

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
  console.log('interceptors.request');
  return config;
});

/**
 * 共通 - レスポンス処理
 * @params {object} config
 */
axios.interceptors.response.use((response) => {
  console.log('interceptors.response');
  return response;
});


/**
 * API call
 */
export const api = (data, params = {}, callback) => {

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
  axios(req)
    .then(res => {
      console.log(res);

      if ( callback )
        callback();
    })
    .catch(err => console.log(err));
}