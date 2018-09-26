export default undefined;
// Example: Interfaces - describe the shape of an object
// Example: Type Guards
// structural identity

interface DataSourceConfig {
  // TODO add URL that might be null
  // TOD add Authentication that can be STRING or OBJECT
}

interface DataSource {
  // empty object...
}

export function createDataSource() {
  // TODO
  // use URL from config
  // use authentication
}

function isBasicAuth() {
  // check if string
}
