import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GpsForm from './GpsForm';
import GpsData from './GpsData';
import { pauseGPS } from '../actions';

class GPS extends Component {
  componentWillUnmount() {
    this.props.pauseGPS(this.props.count);
  }

  render() {
    return (
      <div>
        <h2 style={headingStyle}>GPS Data Viewer</h2>
        <GpsForm />
        <GpsData />
      </div>
    );
  }
}

const headingStyle = {
  textAlign: 'center',
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  color: '#555'
};

const mapStateToProps = (state) => ({
  count: state.gpsData.count
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pauseGPS
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GPS);
