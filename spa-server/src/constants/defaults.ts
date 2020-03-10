import { ServerConfig } from '../interfaces';

export const HTTP_STATUS_CODE_NOT_FOUND = 404;

export const INDEX_FILE = 'index.html';

export const SPA_SERVER_ENV_VARS_PREFIX = 'SRV_';

export const ROUTE_API = '/api';
export const ROUTE_CONFIG = '/config';

export const DEFAULT_SERVER_CONFIG: ServerConfig = {
  host: '0.0.0.0',
  port: 3000,
  logger: false,
  staticDir: 'www/static',
  staticPrefix: '/static',
  spaConfigEnvVarsPrefix: 'SPA_',
};

export const CONFIGURABLE_SERVER_KEYS = [
  'logger',
  'staticDir',
  'staticPrefix',
  'spaConfigEnvVarsPrefix',
];
