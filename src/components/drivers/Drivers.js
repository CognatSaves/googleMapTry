import React, { Component } from 'react';
import './Drivers.css';
import DriversBody from './components/DriversBody/DriversBody.js';
import DriversHeader from './components/DriversHeader/DriversHeader.js';
import DriversRoute from './components/DriversRoute/DriversRoute.js';
import DriversFooter from './components/DriversFooter/DriversFooter.js';

export default class Drivers extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
          <div>
            <div className = "drivers_top_background" >
              <DriversHeader/>
              <DriversRoute/>
            </div>
            <div className = "drivers_bottom_background" >
              <DriversBody/>
              <DriversFooter/>
            </div>
          </div>
        );
    }
}
