import CountriesActionTypes from './types';
import Country from '../../api/Country';

export const fetchCountriesStart = () => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_START,
});

export const fetchCountriesSuccess = (countries) => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchCountriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesStart());

    const data = await new Country().getCountries();
    if (data.length > 0) {
      dispatch(fetchCountriesSuccess(data));
    } else {
      dispatch(fetchCountriesFailure(data));
    }
  };
};
