export default undefined;

interface UsernamePasswordAuthentication {
  username: string;
  password: string;
}

type SimpleAuthentication = string;

interface Postgres {
  name: "Postgres";
  pgInitializer: string;
}

interface Oracle {
  name: "Oracle";
  plsql: string;
}

interface MySQL {
  name: "MySQL";
  msql: string;
}

type Database = Postgres | Oracle | MySQL;

interface DataSourceConfig {
  url: string | null;
  database: Database;
  authentication: UsernamePasswordAuthentication | SimpleAuthentication;
}

const baseConfig: DataSourceConfig = {
  url: "http://www.at",
  authentication: "nils@secret",
  database: {
    name: "Oracle",
    plsql: "HELLO ORACLE"
  }
};

const config: DataSourceConfig = baseConfig;

createDataSource(config);

interface DataSource {}

function handleUnknownDatabase(database: never) {
  throw new Error("wrong db");
}

function initDatabase(database: Database): string {
  switch (database.name) {
    case "Oracle":
      return database.plsql;
    case "Postgres":
      return database.pgInitializer;
    case "MySQL":
      return database.msql;
  }

  handleUnknownDatabase(database);
}

function createDataSource(config: DataSourceConfig): DataSource {
  if (config.url !== null) {
    const myUrl = config.url.toLocaleLowerCase();
  }

  if (isBasicAuth(config.authentication)) {
    config.authentication.toLocaleLowerCase();
  } else {
    config.authentication.password;
  }

  initDatabase(config.database);

  // return a datasource...
  return {};
}

function isBasicAuth(candidate: any): candidate is SimpleAuthentication {
  return typeof candidate === "string";
}
