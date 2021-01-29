const productionUrl = 'http://myapp.com/';

const developmentUrl = 'http://myapp.dev.test/';

const ENVIRONMENT = {
  PROD: 'PROD',
  DEV: 'DEV',
};

const currentEnv = ENVIRONMENT.DEV;

const baseUrl =
  (currentEnv === ENVIRONMENT.PROD && productionUrl) || developmentUrl;

const baseUrlApi = `${baseUrl}api/`;

let Config = {
  baseUrl,
  baseUrlApi,
  token: null,
  login: `${baseUrlApi}login`,
  user: `${baseUrlApi}users`,
};

export default Config;
