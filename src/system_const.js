
const SYSTEM_CONST = {
  URL: {
    TOP: '/top',
    CONFIRM: '/confirm',
    LOGIN: '/',
    ABOUT: '/about',
    COMPANY: '/company',
    COMPANY_INPUT: '/company_input',
  },
  API: {
    USER:           { method: 'get',    path: '/user/' },
    COMPANY:        { method: 'get',    path: '/api/v1/company/' },
    COMPANY_POST:   { method: 'post',   path: '/api/v1/company/' },
    COMPANY_PUT:    { method: 'put',    path: '/api/v1/company/' },
    COMPANY_DELETE: { method: 'delete', path: '/api/v1/company/' },
  },
};

export default SYSTEM_CONST;
