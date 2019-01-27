import React, { Component } from 'react';
import './HomeBody.css'
import RouteMenu from './components/RouteMenu.js'
import MapContainer from './components/MapContainer.js'

export default class HomeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cities:[
        "Тбилиси","Минск"
      ]
    };
    this.changeCity=this.changeCity.bind(this);
    this.addCity=this.addCity.bind(this);
    this.removeCity=this.removeCity.bind(this);
  }
  changeCity(index,e){
    let cities = this.state.cities;
    cities[index]=e.target.value;
    this.setState({
      cities:cities
    });
  }
  addCity(){
    let cities=this.state.cities;
    cities[cities.length]="";
    this.setState({
      cities:cities
    })
  }
  removeCity(index){
    let cities = this.state.cities;
    cities.splice(index,1);
    this.setState({
      cities:cities
    })
  }
  render() {
    return(
      <React.Fragment>
        <div className="bodyMenu">
          <RouteMenu cities={this.state.cities} changeCity={this.changeCity} addCity={this.addCity}
          removeCity={this.removeCity} goToDrivers={this.props.goToDrivers}/>
        </div>
        <div className="body_map">
          <MapContainer cities={this.state.cities}/>
        </div>
      </React.Fragment>
    );
  }
}
