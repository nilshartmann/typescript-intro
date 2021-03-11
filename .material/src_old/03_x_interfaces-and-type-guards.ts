export default undefined;

/** Authentication with username and password */
type UsernamePasswordAuthentication = {
  username: string;
  password: string;
};

/**
 * Authentication by password only
 */
type SimpleAuthentication = string;

type DataSourceConfig = {
  url: string | null;
  authentication: UsernamePasswordAuthentication | SimpleAuthentication;
};

const baseConfig: DataSourceConfig = {
  url: "http://www.voxxedvienna.at",
  authentication: "nils@secret"
};

const config: DataSourceConfig = baseConfig;

createDataSource(config);

function createDataSource(config: DataSourceConfig) {
  if (config.url !== null) {
    const myUrl = config.url.toLocaleLowerCase();
  }

  if (isBasicAuth(config.authentication)) {
    config.authentication.toLocaleLowerCase();
  } else {
    config.authentication.password;
  }

  // return a datasource...
}

function isBasicAuth(candidate: any): candidate is SimpleAuthentication {
  return typeof candidate === "string";
}
