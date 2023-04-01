// name of this file could be <project_name>.types.ts
// project name - wisa; then file name = wisa.types.ts

export type IEnvironmentType = 'production' | 'development' | 'beta';

export interface IEnv {
  stage?: string;
  port: number;
  db: IMongoDBCfg;
  domain: string;
  apiPath: string;
  staticPath: string;
}

export interface IMongoDBCfg {
  name: string;
  user: string;
  pw: string;
  account: string;
  uri: (user: string, pw: string, name: string, account: string) => string;
}
