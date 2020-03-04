import { POJO } from '../interfaces';
import { readConfigFromEnv } from '../utils';
import { serverConfig } from './server-config';

export const spaConfig: POJO = readConfigFromEnv(serverConfig.spaConfigEnvVarsPrefix);
