export interface ServerConfig {
  host: string;
  port: number;
  logger: boolean;
  staticDir: string;
  staticPrefix: string;
  spaConfigEnvVarsPrefix: string;
}
