import API from './_API';

/**
 * Country class in order to implement all countries' resources
 */
export default class Country extends API {
  /**
   * This method will fetch list of countries
   *
   * @param {string} [path] - endpoint path
   *
   * @return {object} - array of countries
   */
  async getCountries() {
    const result = await this.request('/country');
    if (!result.error) {
      return result.data.countries;
    } else {
      return result;
    }
  }
}
