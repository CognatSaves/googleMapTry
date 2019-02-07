import React, { Component } from 'react';
import './header_css.css'
export default class HomeHeader extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <React.Fragment>
        <div className="header_label"></div>
        <div className="header_geo_emblem"></div>


        <button className="header_geo_button">

        </button>

        <div className="header_buttonMass">
          <button className="buttonMass_button">МЕСТА</button>
          <button className="buttonMass_button">ТУРЫ</button>
          <button className="buttonMass_button">ОТЕЛИ</button>
          <button className="buttonMass_button">АВИАБИЛЕТЫ</button>
        </div>

        <button className="header_currency">
          <div className="header_currency_value">$ USD</div>
        </button>
        <button className="header_language">
          <div className="header_language_flag"/>
          <div className="header_language_value">RU</div>
        </button>

        <button className="header_registration">
          <div className="header_registration_text">
            ВОЙТИ / РЕГИСТРАЦИЯ
          </div>
        </button>
      </React.Fragment>
    );
  }
}
