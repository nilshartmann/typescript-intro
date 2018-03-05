interface DataSourceConfig {
  // TODO add URL that might be null
  // TOD add Authentication that can be object or BasicAuth (=> String)
  // TODO add Database
}

interface DataSource {
  // simple DataSource
}

export function createDataSource() {
  // TODO
  // use URL from config
}

function isBasicAuth() {
  // check if string
}

function initDatabase() {
  // TODO:
  // return db-specific initializer
  // handle never case
}
