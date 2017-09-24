import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold'
};

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">GPS-DGPS</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                exact to="/"
              >
                GPS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                to="/dgps"
              >
                DGPS
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav my-2 mr-sm-2">
            <li className="nav-item" style={{fontWeight: 'bold'}}>
              <span style={{color: 'white'}}>Created by </span>
              <a href="https://github.com/kcrossfitter">
                Kcrossfitter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
