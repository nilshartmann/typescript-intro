export default undefined;
// Example: Interfaces - describe the shape of an object
// Example: Type Guards
// structural identity

interface UsernamePasswordAuthentication {
  username: string;
  password: string;
}

interface DataSourceConfig {
  // TODO add URL that might be null
  // TOD add Authentication that can be STRING or OBJECT
}

export function createDataSource() {
  // TODO
  // use URL from config
  // use authentication
}

function isBasicAuth(candidate: any) {
  // check if string
}
