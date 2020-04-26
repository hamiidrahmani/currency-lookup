import { fetchCountriesList, fetchExchangeRate } from './externalServices';
import { Country } from '../../interfaces/Country';

const fetchCountries = async (): Promise<Country[]> => {
  try {
    const countriesList = await fetchCountriesList();
    const exchangeRates = await fetchExchangeRate();

    /**
     * As the api endpoint is restricted and we cannot change the base to SEK
     */
    const EuroToSek = 1 / exchangeRates.SEK;

    const formattedCountriesList: Country[] = [];
    countriesList.forEach(async (country: any) => {
      country.currencies.forEach((currency: object, index: number) => {
        /**
         * Some currencies have (none) code.
         * Not sure we need to omit them or not.
         */
        if (country.currencies[index]) {
          /**
           * Every exchange rates need to convert from EUR based rate to SEK based rate.
           */
          country.currencies[index].exchangeRateToSEK =
            EuroToSek / (1 / exchangeRates[country.currencies[index].code]);
        }
      });

      const currentCountry: Country = {
        name: country.name,
        population: country.population,
        currencies: country.currencies,
      };

      formattedCountriesList.push(currentCountry);
    });
    return formattedCountriesList;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchCountries };
