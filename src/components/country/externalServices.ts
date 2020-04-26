import axios from 'axios';
import { getEnv } from './../../utils';
const {
  COUNTRIES_URL,
  COUNTRIES_VERSION,
  EXCHANGE_RATE_URL,
  EXCHANGE_RATE_ENDPOINT,
  EXCHANGE_RATE_API_KEY,
} = getEnv();

const fetchCountriesList = async (): Promise<[]> => {
  try {
    const response = await axios.get(`${COUNTRIES_URL}/${COUNTRIES_VERSION}`, {
      params: {
        fullText: true,
        fields: 'name;population;currencies',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Data is unavailable right now. Try again later');
    }
  } catch {
    throw new Error('Fail to fetch countries from endpoint!');
  }
};

const fetchExchangeRate = async (): Promise<any> => {
  try {
    const response = await axios.get(`${EXCHANGE_RATE_URL}/${EXCHANGE_RATE_ENDPOINT}`, {
      params: {
        access_key: EXCHANGE_RATE_API_KEY,
        // base: 'SEK', // API key is limited?  error: { code: 105, type: 'base_currency_access_restricted' }
      },
    });
    if (response.status === 200) {
      return response.data.rates;
    } else {
      throw new Error('Data is unavailable right now. Try again later');
    }
  } catch {
    throw new Error('Fail to fetch exchange rate from endpoint!');
  }
};

export { fetchCountriesList, fetchExchangeRate };
