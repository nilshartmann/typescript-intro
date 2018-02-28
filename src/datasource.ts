export default undefined;

interface UsernamePasswordAuthentication {
  username: string;
  password: string;
}

interface DataSourceConfig {
  url: string | null;
  authentication: UsernamePasswordAuthentication | string;
}

const baseConfig = {
  url: "http://www.at",
  authentication: "nils@secret",
  extra: "fasdfasdf"
};

const config: DataSourceConfig = baseConfig;

createDataSource(config);

interface DataSource {}

function createDataSource(config: DataSourceConfig): DataSource {
  if (config.url !== null) {
    const myUrl = config.url.toLocaleLowerCase();
  }

  // return a datasource...
  return {};
}
