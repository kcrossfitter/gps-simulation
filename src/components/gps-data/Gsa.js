import React from 'react';
import { connect } from 'react-redux';

const Gsa = ({ gsa }) => {
  console.log('gsa:', gsa);
  const data = gsa.split(',');

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>GSA</h3>
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
            <td>GNSS DOP and active satellites</td>
          </tr>
          <tr>
            <td>Mode 1</td>
            <td>{data[1]}</td>
            <td>A: Auto 2D/3D, M: Manual 2D/3D</td>
          </tr>
          <tr>
            <td>Mode 2</td>
            <td>{data[2]}</td>
            <td>1: No fix, 2: 2D, 3: 3D</td>
          </tr>
          <tr>
            <td>Satellite Used 1</td>
            <td>{data[3]}</td>
            <td>Satellite used on channel 1</td>
          </tr>
          <tr>
            <td>Satellite Used 2</td>
            <td>{data[4]}</td>
            <td>Satellite used on channel 2</td>
          </tr>
          <tr>
            <td>Satellite Used 3</td>
            <td>{data[5]}</td>
            <td>Satellite used on channel 3</td>
          </tr>
          <tr>
            <td>Satellite Used 4</td>
            <td>{data[6]}</td>
            <td>Satellite used on channel 4</td>
          </tr>
          <tr>
            <td>Satellite Used 5</td>
            <td>{data[7]}</td>
            <td>Satellite used on channel 5</td>
          </tr>
          <tr>
            <td>Satellite Used 6</td>
            <td>{data[8]}</td>
            <td>Satellite used on channel 6</td>
          </tr>
          <tr>
            <td>Satellite Used 7</td>
            <td>{data[9]}</td>
            <td>Satellite used on channel 7</td>
          </tr>
          <tr>
            <td>Satellite Used 8</td>
            <td>{data[10]}</td>
            <td>Satellite used on channel 8</td>
          </tr>
          <tr>
            <td>Satellite Used 9</td>
            <td>{data[11]}</td>
            <td>Satellite used on channel 9</td>
          </tr>
          <tr>
            <td>Satellite Used 10</td>
            <td>{data[12]}</td>
            <td>Satellite used on channel 10</td>
          </tr>
          <tr>
            <td>Satellite Used 11</td>
            <td>{data[13]}</td>
            <td>Satellite used on channel 11</td>
          </tr>
          <tr>
            <td>Satellite Used 12</td>
            <td>{data[14]}</td>
            <td>Satellite used on channel 12</td>
          </tr>
          <tr>
            <td>PDOP</td>
            <td>{data[15]}</td>
            <td>Position dilution of precision</td>
          </tr>
          <tr>
            <td>HDOP</td>
            <td>{data[16]}</td>
            <td>Horizontal dilution of precision</td>
          </tr>
          <tr>
            <td>VDOP</td>
            <td>{data[17]}</td>
            <td>Vertical dilution of precision</td>
          </tr> 
          <tr>
            <td>Checksum</td>
            <td>{data[18]}</td>
            <td>Checksum of GGA data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gsa: state.gpsData.gpsData.gsa
});

export default connect(mapStateToProps)(Gsa);
