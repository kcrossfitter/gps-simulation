import {
  START_DGPS,
  PAUSE_DGPS,
  STOP_DGPS
} from '../actions/types.js';

const initialState = {
  count: 0,
  dgpsStatus: 'stopped',    // stopped, paused, started
  dgpsData: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_DGPS:
      return {
        ...state,
        count: action.count,
        dgpsStatus: action.dgpsStatus,
        dgpsData: action.dgpsData
      };
    case PAUSE_DGPS:
      return {
        ...state,
        count: action.count,
        dgpsStatus: action.dgpsStatus
      };
    case STOP_DGPS:
      return {
        ...state,
        count: 0,
        dgpsStatus: action.dgpsStatus
      };
    default:
      return state;
  }
};
