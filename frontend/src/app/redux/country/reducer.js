import CountriesActionTypes from './types';

const INITIAL_STATE = {
  countries: [],
  isFetching: false,
};

const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        countries: action.payload,
      };
    case CountriesActionTypes.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default countryReducer;
