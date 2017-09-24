import React from 'react';
import { connect } from 'react-redux';

const Gsv = ({ gsv }) => {
  console.log('gsv:', gsv);
  const data = gsv.split(',');

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>GSV</h3>
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
            <td>GNSS Satellite in View</td>
          </tr>
          <tr>
            <td>Number of Messages</td>
            <td>{data[1]}</td>
            <td>Number of messages in complete message(1~3)</td>
          </tr>
          <tr>
            <td>Sequence Number</td>
            <td>{data[2]}</td>
            <td>Sequence number of this entry(1~3)</td>
          </tr>
          <tr>
            <td>Satellite in View</td>
            <td>{data[3]}</td>
            <td></td>
          </tr>
          <tr>
            <td>Satellite ID 1</td>
            <td>{data[4]}</td>
            <td>Range is 1~32</td>
          </tr>
          <tr>
            <td>Elevation 1</td>
            <td>{data[5]}</td>
            <td>Elevation in degrees(0~90)</td>
          </tr>
          <tr>
            <td>Azimuth 1</td>
            <td>{data[6]}</td>
            <td>Azimuth in degrees(0~359)</td>
          </tr>
          <tr>
            <td>SNR 1</td>
            <td>{data[7]}</td>
            <td>Signal to noise ration in dbHZ(0~99)</td>
          </tr>
          <tr>
            <td>Satellite ID 2</td>
            <td>{data[8]}</td>
            <td>Range is 1~32</td>
          </tr>
          <tr>
            <td>Elevation 2</td>
            <td>{data[9]}</td>
            <td>Elevation in degrees(0~90)</td>
          </tr>
          <tr>
            <td>Azimuth 2</td>
            <td>{data[10]}</td>
            <td>Azimuth in degrees(0~359)</td>
          </tr>
          <tr>
            <td>SNR 2</td>
            <td>{data[11]}</td>
            <td>Signal to noise ration in dbHZ(0~99)</td>
          </tr>
          <tr>
            <td>Satellite ID 3</td>
            <td>{data[12]}</td>
            <td>Range is 1~32</td>
          </tr>
          <tr>
            <td>Elevation 3</td>
            <td>{data[13]}</td>
            <td>Elevation in degrees(0~90)</td>
          </tr>
          <tr>
            <td>Azimuth 3</td>
            <td>{data[14]}</td>
            <td>Azimuth in degrees(0~359)</td>
          </tr>
          <tr>
            <td>SNR 3</td>
            <td>{data[15]}</td>
            <td>Signal to noise ration in dbHZ(0~99)</td>
          </tr>
          <tr>
            <td>Satellite ID 4</td>
            <td>{data[16]}</td>
            <td>Range is 1~32</td>
          </tr>
          <tr>
            <td>Elevation 4</td>
            <td>{data[17]}</td>
            <td>Elevation in degrees(0~90)</td>
          </tr>
          <tr>
            <td>Azimuth 4</td>
            <td>{data[18]}</td>
            <td>Azimuth in degrees(0~359)</td>
          </tr>
          <tr>
            <td>SNR 4</td>
            <td>{data[19]}</td>
            <td>Signal to noise ration in dbHZ(0~99)</td>
          </tr>
          <tr>
            <td>Checksum</td>
            <td>{data[20]}</td>
            <td>Checksum of GGA data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gsv: state.gpsData.gpsData.gsv
});

export default connect(mapStateToProps)(Gsv);
