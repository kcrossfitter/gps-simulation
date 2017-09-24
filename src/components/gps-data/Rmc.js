import React from 'react';
import { connect } from 'react-redux';

const Rmc = ({ rmc }) => {
  console.log('rmc:', rmc);
  const data = rmc.split(',')

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>RMC</h3>
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
            <td>Recommended Minimum Specific GNSS Data</td>
          </tr>
          <tr>
            <td>UTC</td>
            <td>{data[1]}</td>
            <td>Universal Time Coordinate</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{data[2]}</td>
            <td>A: Valid, V: Invalid</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{data[3]}</td>
            <td>ddmm.mmmm</td>
          </tr>
          <tr>
            <td>N/S indicator</td>
            <td>{data[4]}</td>
            <td>N: North, S: South</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{data[5]}</td>
            <td>dddmm.mmmm</td>
          </tr>
          <tr>
            <td>E/W indicator</td>
            <td>{data[6]}</td>
            <td>E: East, W: West</td>
          </tr>
          <tr>
            <td>Speed Over Ground</td>
            <td>{data[7]}</td>
            <td>Knots</td>
          </tr>
          <tr>
            <td>Course Over Ground</td>
            <td>{data[8]}</td>
            <td>Degrees</td>
          </tr>
          <tr>
            <td>UTC Date</td>
            <td>{data[9]}</td>
            <td>DDMMYY</td>
          </tr>
          <tr>
            <td>Magnetic Variation</td>
            <td>{data[10]},{data[11]}</td>
            <td></td>
          </tr>   
          <tr>
            <td>Checksum</td>
            <td>{data[12]}</td>
            <td>Checksum of RMC data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rmc: state.gpsData.gpsData.rmc
});

export default connect(mapStateToProps)(Rmc);
