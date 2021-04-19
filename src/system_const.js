
const SYSTEM_CONST = {
  URL: {
    TOP: '/top',
    CONFIRM: '/confirm',
    LOGIN: '/',
    ABOUT: '/about',
    COMPANY: '/company/index',
    COMPANY_REGIST: '/company/regist',
  },
  API: {
    USER:           { method: 'get',    path: '/user/' },
    COMPANY:        { method: 'get',    path: '/api/v1/company/' },
    COMPANY_REGIST: { method: 'post',   path: '/api/v1/company/' },
    COMPANY_UPDATE: { method: 'put',    path: '/api/v1/company/' },
    COMPANY_DELETE: { method: 'delete', path: '/api/v1/company/' },
  },
};

export default SYSTEM_CONST;
