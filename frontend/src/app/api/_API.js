import { api as apiConfig } from '../config';
/**
 * Base API class. This Class is not for direct usage.
 * Extend your model class from API class and use request method instead.
 */
export default class API {
  constructor(
    passedConfig,
    host = apiConfig.API_HOST,
    port = apiConfig.API_PORT,
    token = apiConfig.API_TOKEN
  ) {
    this.defaultConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    this.config = {
      ...this.defaultConfig,
      ...passedConfig,
    };

    this.host = host;
    this.port = port;
  }

  /**
   * This method will create absolute url for fetch
   *
   * @param {string} [path] - endpoint path
   */
  _createUrl(path) {
    return `${this.host}:${this.port}${path}`;
  }

  /**
   * Method to make all http requests
   *
   * @param {string} [path] - endpoint path
   * @param {string} [method='GET'] - Http method for request
   *
   * @return {object} response objet
   */
  request(path, method = 'GET') {
    // Setting request method. Could be GET, POST, PUT, DELETE, ...
    this.config.method = method;

    return fetch(this._createUrl(path), this.config)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return {
          code: 500,
          error,
        };
      });
  }
}
