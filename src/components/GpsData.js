import React, { Component } from 'react';

import Gga from './gps-data/Gga';
import Gsa from './gps-data/Gsa';
import Gsv from './gps-data/Gsv';
import Rmc from './gps-data/Rmc';

class GpsData extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Gga />
          </div>
          <div className="col-md-6">
            <Rmc />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Gsa />
          </div>
          <div className="col-md-6">
            <Gsv />
          </div>
        </div>
      </div>
    );
  }
}

export default GpsData;
