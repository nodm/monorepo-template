import { DEFAULT_SERVER_CONFIG, SPA_SERVER_ENV_VARS_PREFIX, CONFIGURABLE_SERVER_KEYS } from './defaults';
import { ServerConfig } from '../interfaces';
import { filterProperties, readConfigFromEnv } from '../utils';

const userServiceConfig = filterProperties(readConfigFromEnv(SPA_SERVER_ENV_VARS_PREFIX), CONFIGURABLE_SERVER_KEYS);

export const serverConfig: ServerConfig = {
  ...DEFAULT_SERVER_CONFIG,
  ...userServiceConfig,
};
