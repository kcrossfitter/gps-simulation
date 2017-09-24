import { combineReducers } from 'redux';

import gpsReducer from './gpsReducer';

export default combineReducers({
  gpsData: gpsReducer
});
