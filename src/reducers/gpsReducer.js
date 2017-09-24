import {
  START_GPS,
  PAUSE_GPS,
  STOP_GPS
} from '../actions/types.js';

const initialState = {
  count: 0,
  gpsStatus: 'stopped',    // stopped, paused, started
  gpsData: {
    gga: '',
    rmc: '',
    gsa: '',
    gsv: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GPS:
      return {
        ...state,
        count: action.count,
        gpsStatus: action.gpsStatus,
        gpsData: {
          ...state.gpsData,
          ...action.gpsData
        }
      };
    case PAUSE_GPS:
      return {
        ...state,
        count: action.count,
        gpsStatus: action.gpsStatus
      };
    case STOP_GPS:
      return {
        ...state,
        count: 0,
        gpsStatus: action.gpsStatus
      };
    default:
      return state;
  }
};
