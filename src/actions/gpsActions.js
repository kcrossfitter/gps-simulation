import {
  START_GPS,
  PAUSE_GPS,
  STOP_GPS
} from './types.js';
import { generateGPSData } from './helpers/generateGPS';

let timerGPS;

export const startGPS = (currentCount) => {
  let newCount = currentCount;

  return (dispatch) => {
    timerGPS = setInterval(() => {
      let data = generateGPSData();
      let header = data.slice(3, 6);
      let gpsData = {};

      switch (header) {
        case 'GGA':
          gpsData.gga = data;
          break;
        case 'RMC':
          gpsData.rmc = data;
          break;
        case 'GSA':
          gpsData.gsa = data;
          break;
        case 'GSV':
          gpsData.gsv = data;
          break;
        default:  // don't deal with other data
          return;
      }

      if (newCount > 0) {
        dispatch({
          type: START_GPS,
          gpsStatus: 'started',
          count: newCount > 0 ? newCount-- : 0,
          gpsData
        });
      } else {
        clearInterval(timerGPS);
        dispatch({
          type: STOP_GPS,
          gpsStatus: 'stopped',
          count: 0
        });
      }
    }, 1000);
  }
};

export const pauseGPS = (currentCount) => {
  clearInterval(timerGPS);
  return {
    type: PAUSE_GPS,
    gpsStatus: 'paused',
    count: currentCount
  };
};

export const stopGPS = () => {
  clearInterval(timerGPS);
  return {
    type: STOP_GPS,
    gpsStatus: 'stopped',
    count: 0
  };
};

