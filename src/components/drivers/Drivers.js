import React, { Component } from 'react';
import HomeHeader from '../home/components/HomeHeader/HomeHeader.js'
import './Drivers.css';

export default class Drivers extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="drivers_window">
        <div className="drivers_header">
          <HomeHeader/>
        </div>

      </div>
    )
  }
}
