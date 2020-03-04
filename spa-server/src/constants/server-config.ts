import { DEFAULT_SERVER_CONFIG, SPA_SERVER_ENV_VARS_PREFIX } from './defaults';
import { ServerConfig } from '../interfaces';
import { readConfigFromEnv } from '../utils';

export const serverConfig: ServerConfig = {
  ...DEFAULT_SERVER_CONFIG,
  ...readConfigFromEnv(SPA_SERVER_ENV_VARS_PREFIX),
};
