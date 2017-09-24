import moment from 'moment';
// const moment = require('moment');

const GGA = 0;
const RMC = 1;
const GSA = 2;
const GSV = 3;

const lat = () => {
  // latitude: ddmm.mmmm
  const sign = Math.floor(Math.random() * 2);

  let deg = Math.floor(Math.random() * 90);
  deg = deg < 10 ? '0' + deg : deg;

  let min = (Math.random() * 100).toFixed(4);
  min = min < 10 ? '0' + min : min;

  return sign === 0 ? `-${deg}${min}` : `${deg}${min}`;
}

const ns = () => {
  const randInt = Math.floor(Math.random() * 2);
  return randInt === 0 ? 'N' : 'S';
}

const lng = () => {
  // longitude: dddmm.mmmm
  const sign = Math.floor(Math.random() * 2);

  let deg = Math.floor(Math.random() * 180);
  
  if (deg < 10) {
    deg = '00' + deg;
  } else if (deg < 100) {
    deg = '0' + deg;
  }

  let min = (Math.random() * 100).toFixed(4);
  min = min < 10 ? '0' + min : min;

  return sign === 0 ? `-${deg}${min}` : `${deg}${min}`;
}

const ew = () => {
  const randInt = Math.floor(Math.random() * 2);
  return randInt === 0 ? 'E' : 'W';
}

const psnFix = () => {
  // 0: Invalid, 1: Valid SPS, 2: Valid DGPS, 3: Valid PPS
  return Math.floor(Math.random() * 4);
}

const satUsed = () => {
  const randInt = Math.floor(Math.random() * 12);
  return randInt < 10 ? `0${randInt}` : `${randInt}`;
}

const hdop = () => {
  return (Math.random() * 30).toFixed(2);
}

const pdop = () => {
  return (Math.random() * 30).toFixed(2);
}

const vdop = () => {
  return (Math.random() * 30).toFixed(2);
}

const alt = () => {
  return (Math.random() * 600).toFixed(2);
}

const geoid = () => {
  return (Math.random() * 300).toFixed(2);
}

const checksum = (str) => {
  let chksum = 0;
  for (let i = 0; i < str.length; i++) {
    chksum = chksum ^ str.charCodeAt(i);
  }
  return chksum;
}

const status = () => {
  // A: Valid, V: Invalid
  const randInt = Math.floor(Math.random() * 2);
  return randInt === 0 ? 'A' : 'V';
}

// return knot
const speedOverGround = () => {
  let knot = (Math.random() * 100).toFixed(1);
  if (knot < 10) {
    knot = '00' + knot;
  } else if (knot < 100) {
    knot = '0' + knot;
  }
  return knot;
}

const courseOverGround = () => {
  let deg = (Math.random() * 360).toFixed(1);
  if (deg < 10) {
    deg = '00' + deg;
  } else if (deg < 100) {
    deg = '0' + deg;
  }
  return deg;
}

const utcDate = () => {
  return moment.utc().format('DDMMYY');
}

const magneticVariation = () => {
  const randInt = Math.floor(Math.random() * 2);
  let deg = (Math.random() * 180).toFixed(1);
  if (deg < 10) {
    deg = '00' + deg;
  } else if (deg < 100) {
    deg = '0' + deg;
  }

  return randInt === 0 ? `${deg},E` : `${deg},W`;
}

const mode1 = () => {
  const randInt = Math.floor(Math.random() * 2);
  return randInt === 0 ? 'A' : 'M';
}

const mode2 = () => {
  return Math.floor(Math.random() * 3) + 1;
}

const idOfSV = () => {
  // choose 5 unique random numbers between 0 ~ 11
  let arr = [], packed = [];
  while (arr.length < 5) {
    let randInt = Math.floor(Math.random() * 12)
    if (arr.indexOf(randInt) > -1) {
      continue;
    }
    arr.push(randInt);
  }

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let dist;
    if (i === 0) {
      dist = arr[i] - 0;
    } else {
      dist = arr[i] - arr[i-1] - 1;
    }
    
    for (let j = 0; j < dist; j++) {
      packed.push(',');
    }
    packed.push(arr[i]);
  }
  
  let len = packed.length;
  if (len < 12) {
    for (let k = 0; k < 12 - len; k++) {
      packed.push(',');
    }
  }

  let str = '';

  for (let l = 0; l < 12; l++) {
    str += packed[l];
    if (packed[l] !== ',') {
      str += ','
    }
  }
  console.log('packed length:', packed.length);
  return str;
}

const numOfMsg = () => {
  // number of messages in complete message (1~3)
  return Math.floor(Math.random() * 3) + 1;
}

const seqNum = () => {
  // Sequence number of this message
  // Following is incorrect implementaion,
  // But in reality, it will just work
  return Math.floor(Math.random() * 3) + 1;
}

const satInView = () => {
  return Math.floor(Math.random() * 32) + 1;
}

const satInfo = () => {
  let satIDs = [], arr = [];

  while (satIDs.length < 4) {
    let satID = Math.floor(Math.random() * 32);
    
    if (satIDs.indexOf(satID) > -1) {
      continue;
    }

    satIDs.push(satID);

    let elevation = Math.floor(Math.random() * 90);
    let azimuth = Math.floor(Math.random() * 360);
    let snr = Math.floor(Math.random() * 100);
    arr.push({ satID, elevation, azimuth, snr });
  }
  return arr;
}

const nmeaGGA = () => {
  const utc = moment.utc().valueOf();
  const str = `GPGGA,${utc},${lat()},${ns()},${lng()},${ew()},${psnFix()},${satUsed()},${hdop()},${alt()},M,${geoid()},M,,,`;
  const gga = `$${str}*${checksum(str)}\n`;
  return gga;
};

const nmeaRMC = () => {
  const utc = moment.utc().valueOf();
  const str = `GPRMC,${utc},${status()},${lat()},${ns()},${lng()},${ew()},${speedOverGround()},${courseOverGround()},${utcDate()},${magneticVariation()},`;
  const rmc = `$${str}*${checksum(str)}\n`;
  return rmc;
}

const nmeaGSA = () => {
  const str = `GPGSA,${mode1()},${mode2()},${idOfSV()}${pdop()},${hdop()},${vdop()}`;
  const gsa = `$${str},*${checksum(str)}\n`;
  return gsa;
}

const nmeaGSV = () => {
  const sat = satInfo();
  let sats = '';
  for (let i = 0; i < sat.length; i++) {
    sats += `${sat[i].satID},${sat[i].elevation},${sat[i].azimuth},${sat[i].snr},`
  }
  const str = `GPGSV,${numOfMsg()},${seqNum()},${satInView()},${sats}`;
  const gsv = `$${str}*${checksum(str)}\n`;
  return gsv;
}

const nmeaData = (nmea) => {
  switch (nmea) {
    case GGA:
      return nmeaGGA();
    case RMC:
      return nmeaRMC();
    case GSA:
      return nmeaGSA();
    case GSV:
      return nmeaGSV();
    default:
      return;
  }
};

export const generateGPSData = () => {
  // generate random integer between 0 ~ 4
  const NMEA = Math.floor(Math.random() * 4);
  return nmeaData(NMEA);
};

