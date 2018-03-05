export default undefined;

interface UsernamePasswordAuthentication {
  username: string;
  password: string;
}

type SimpleAuthentication = string;

interface DataSourceConfig {
  url: string | null;
  authentication: UsernamePasswordAuthentication | SimpleAuthentication;
}

const baseConfig: DataSourceConfig = {
  url: "http://www.voxxedvienna.at",
  authentication: "nils@secret"
};

const config: DataSourceConfig = baseConfig;

createDataSource(config);

interface DataSource {}

function createDataSource(config: DataSourceConfig): DataSource {
  if (config.url !== null) {
    const myUrl = config.url.toLocaleLowerCase();
  }

  if (isBasicAuth(config.authentication)) {
    config.authentication.toLocaleLowerCase();
  } else {
    config.authentication.password;
  }

  // return a datasource...
  return {};
}

function isBasicAuth(candidate: any): candidate is SimpleAuthentication {
  return typeof candidate === "string";
}
