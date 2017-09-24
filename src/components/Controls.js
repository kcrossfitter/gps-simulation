import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { startGPS, pauseGPS, stopGPS } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    const { count } = this.props;

    switch (newStatus) {
      case 'started':
        this.props.startGPS(count);
        break;
      case 'stopped':
        this.props.stopGPS();
        break;
      case 'paused':
        this.props.pauseGPS(count);
        break;
      default:
        break;
    }
  }

  render() {
    const { gpsStatus } = this.props;

    const renderStartStopBtn = () => {
      if (gpsStatus === 'started') {
        return (
          <button 
            className="btn btn-primary"
            style={btnStyle}
            onClick={() => this.onStatusChange('paused')}
          >
            Pause GPS
          </button>
        )
      } else {
        return (
          <button 
            className="btn btn-primary"
            style={btnStyle}
            onClick={() => this.onStatusChange('started')}
          >
            Start GPS
          </button>
        )
      }
    }
    return (
      <div style={controlStyle}>
        {renderStartStopBtn()}
        <button 
          className="btn btn-outline-danger"
          style={btnStyle}
          onClick={() => this.onStatusChange('stopped')}
        >
          Clear GPS
        </button>
      </div>
    );
  }
}

const controlStyle = {
  margin: '0 auto 1rem auto',
  display: 'flex',
  width: '250px',
  justifyContent: 'space-around'
};

const btnStyle = {
  width: '100px'
}

const mapStateToProps = (state) => ({
  count: state.gpsData.count,
  gpsStatus: state.gpsData.gpsStatus
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startGPS, pauseGPS, stopGPS
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
