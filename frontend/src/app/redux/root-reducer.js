import { combineReducers } from 'redux';

import countryReducer from './country/reducer';

export default combineReducers({
  country: countryReducer,
});
