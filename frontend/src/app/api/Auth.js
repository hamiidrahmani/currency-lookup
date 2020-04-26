import API from './_API';

/**
 * Auth class in order to implement all authentication methods
 */
export default class Auth extends API {
  /**
   * This method will authentication token
   *
   * @return {string} - authentication jwt token
   */
  async getToken() {
    const result = await this.request('/auth/login');
    if (!result.error) {
      return result.data.token;
    } else {
      return result;
    }
  }
}
