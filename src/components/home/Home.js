import React, { Component } from 'react';
import './Home.css';
import './text.css'
import HomeHeader from './components/HomeHeader/HomeHeader.js'
import HomeBody from './components/HomeBody/HomeBody.js'
export default class Home extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="home_window">
        <div className="home_background"></div>
        <div className="home_header">
          <HomeHeader/>
        </div>
        <div className="home_text">
          <div className="text_firstLine">спланируйте свою экскурсию</div>
          <div className="text_secondLine">Предложения от местных гидов-водителей по вашему индивидуальному маршруту</div>
        </div>
        <div className="home_body">
          <HomeBody goToDrivers={this.props.goToDrivers}/>
        </div>


        </div>
    )
  }
}
