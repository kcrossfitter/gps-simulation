import React, { Component } from 'react';


class DGPS extends Component {
  render() {
    return (
      <div>
        <h2 style={headingStyle}>DGPS Data Viewer</h2>
      </div>
    );
  }
}

const headingStyle = {
  textAlign: 'center',
  marginTop: '2.5rem',
  marginBottom: '2.5rem',
  color: '#555'
};

export default DGPS;