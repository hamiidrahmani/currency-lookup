export const getEnv = () => {
  if (!process.env.APP_SECRET) {
    throw new Error('Please add "APP_SECRET" to .env file.');
  }
  return {
    APP_PORT: process.env.APP_PORT || 3001,
    APP_SECRET: process.env.APP_SECRET,
    COUNTRIES_URL: process.env.COUNTRIES_URL,
    COUNTRIES_VERSION: process.env.COUNTRIES_VERSION,
    EXCHANGE_RATE_URL: process.env.EXCHANGE_RATE_URL,
    EXCHANGE_RATE_ENDPOINT: process.env.EXCHANGE_RATE_ENDPOINT,
    EXCHANGE_RATE_API_KEY: process.env.EXCHANGE_RATE_API_KEY,
    MAX_REQUEST_COUNT: process.env.MAX_REQUEST_COUNT,
    MAX_REQUEST_TIME: process.env.MAX_REQUEST_TIME,
  };
};
