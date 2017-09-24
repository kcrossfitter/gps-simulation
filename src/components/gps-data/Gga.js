import React from 'react';
import { connect } from 'react-redux';

const Gga = ({ gga }) => {
  console.log('gga:', gga);
  const data = gga.split(',')

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>GGA</h3>
      <table className="table table-bordered table-sm table-style">
        <thead className="thead-default">
          <tr>
            <th>Field</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sentence ID</td>
            <td>{data[0].slice(3,6)}</td>
            <td>GPS Fix Data</td>
          </tr>
          <tr>
            <td>UTC</td>
            <td>{data[1]}</td>
            <td>Universal Time Coordinate</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{data[2]}</td>
            <td>ddmm.mmmm</td>
          </tr>
          <tr>
            <td>N/S indicator</td>
            <td>{data[3]}</td>
            <td>N: North, S: South</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{data[4]}</td>
            <td>dddmm.mmmm</td>
          </tr>
          <tr>
            <td>E/W indicator</td>
            <td>{data[5]}</td>
            <td>E: East, W: West</td>
          </tr>
          <tr>
            <td>Position Fix</td>
            <td>{data[6]}</td>
            <td>0: Invalid, 1: Valid SPS, 2: Valid DGPS, 3: Valid PPS</td>
          </tr>
          <tr>
            <td>Satellite Used</td>
            <td>{data[7]}</td>
            <td>Satellite being used</td>
          </tr>
          <tr>
            <td>HDOP</td>
            <td>{data[8]}</td>
            <td>Horizontal dilution of precision</td>
          </tr>
          <tr>
            <td>Altitude</td>
            <td>{data[9]}</td>
            <td>Altitude in meters according to WGS-84 ellipsoid</td>
          </tr>
          <tr>
            <td>Altitude Unit</td>
            <td>{data[10]}</td>
            <td>M: Meters</td>
          </tr>
          <tr>
            <td>Geoid Separation</td>
            <td>{data[11]}</td>
            <td>Geoid Separation in meters according to WGS-84 ellipsoid</td>
          </tr>
          <tr>
            <td>Separation Units</td>
            <td>{data[12]}</td>
            <td>M: Meters</td>
          </tr>
          <tr>
            <td>DGPS Age</td>
            <td>{data[13]}</td>
            <td>Ages of DGPS data in seconds</td>
          </tr>
          <tr>
            <td>DGPS Station ID</td>
            <td>{data[14]}</td>
            <td>DGPS Station ID</td>
          </tr>
          <tr>
            <td>Checksum</td>
            <td>{data[15]}</td>
            <td>Checksum of GGA data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gga: state.gpsData.gpsData.gga
});

export default connect(mapStateToProps)(Gga);
