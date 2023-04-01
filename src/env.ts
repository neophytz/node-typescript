import { exit } from "process";
import { IEnv } from "./types";
import { IEnvironmentType } from "./types";
/**
 * we are only allowing 2 environments and return the 
 * related configs for each stored in environments folder.
 */
export const env = () : IEnv => {
  // js -> string -> int parseInt(variable_name)
  // ts -> string -> number <number> variable_name
  const _environment : IEnvironmentType = <IEnvironmentType>process.env.ENVIRONMENT || 'development';

  if (_environment === 'development') return require("./environment/dev.env"); // coding 
  else if (_environment === "production" || _environment === 'beta') return require("./environment/prod.env"); // production
  else {
    console.log(`
      Error. Shell variable ENVIRONMENT not set.
      Acceptable values are 'development' | 'production'
    `);
    exit(1); // we will kill the server!!
  }
};