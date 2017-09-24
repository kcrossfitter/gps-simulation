import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { startGPS, pauseGPS, stopGPS } from '../actions';
import Controls from './Controls';

class GpsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(() => ({
      numberOfData: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const count = Number(this.state.numberOfData);
    this.setState(() => ({
      numberOfData: ''
    }));

    this.props.startGPS(count);
  }

  render() {
    const { gpsStatus } = this.props;

    return (
      <div>
        {
          gpsStatus === 'stopped'
          ?
          <form 
            style={startForm}
            onSubmit={this.handleSubmit}  
          >
            <input 
              type="number"
              className="form-control"
              style={countInput}
              min="1"
              minLength="1"
              placeholder="How many GPS data?"
              value={this.state.numberOfData}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-primary btn-block"
              style={countBtn}
            > 
              Start GPS
            </button>
          </form>
          :
          <Controls 
            startGPS={this.props.startGPS}
            pauseGPS={this.props.pauseGPS}
            stopGPS={this.props.stopGPS}
            count={this.props.count}
            gpsStatus={this.props.gpsStatus}
          />
        }
      </div>
    );
  }
}

const startForm = {
  margin: '0 auto 1rem auto',
  width: 250
};

const countInput = {
  fontSize: '1.25rem',
  marginBottom: '0.5rem'
};

const countBtn = {
  fontSize: '1.25rem'
};

const mapStateToProps = (state) => ({
  count: state.gpsData.count,
  gpsStatus: state.gpsData.gpsStatus
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startGPS, pauseGPS, stopGPS
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GpsForm);
