import { POJO } from '../interfaces';

const environmentVariablesObj: POJO = process.env;

function removePrefix(key: string, prefix: string): string {
  return key.slice(prefix.length);
}

function convertKebabCaseToCamelCase(name: string): string {
  return name.split('_')
    .map((s: string) => s.toLocaleLowerCase())
    .map((s: string, index: number) => index ? s.charAt(0).toLocaleUpperCase() + s.slice(1) : s)
    .join('');
}

function createConfigKey(key: string, prefix: string): string {
  return convertKebabCaseToCamelCase(removePrefix(key, prefix));
}

export function readConfigFromEnv(prefix: string)  {
  if (typeof prefix !== 'string') {
    throw new TypeError('Configuration prefix should be a string');
  }

  return Object.keys(environmentVariablesObj)
    .filter((key: string) => key.startsWith(prefix))
    .reduce((obj, key) => ({
      ...obj,
      [createConfigKey(key, prefix)]: environmentVariablesObj[key],
    }), {});
}
