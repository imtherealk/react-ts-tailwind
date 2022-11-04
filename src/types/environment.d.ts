enum Environment {
  local = 'local',
  dev = 'dev',
  prod = 'prod',
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ENVIRONMENT: Environment;
    }
  }
}
export {};
