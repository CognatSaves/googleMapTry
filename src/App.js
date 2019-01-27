import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js';
import Drivers from './components/drivers/Drivers.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      picture: 'home'
    };
    this.goToDrivers=this.goToDrivers.bind(this);
  }
  goToDrivers(){
    this.setState({
      picture:'drivers'
    })
  }
  render() {
    switch (this.state.picture){
      case 'home':
        return (
          <div className="center">
            <Home goToDrivers={this.goToDrivers}/>
          </div>
        );
      case 'drivers':
        return (
          <div className="center">
            <Drivers/>
          </div>
        )
      default:
        return (
          <div>State Error</div>
        )
    }
  }
}

export default App;
