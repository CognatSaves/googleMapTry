import React, { Component } from 'react';
import './header_css.css'
export default class HomeHeader extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <React.Fragment>
        <div className="header_label">Label place</div>
        <div className="header_geo_emblem">Emblem</div>

        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle header_geo_button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GEO
          </a>
        </div>

        <div className="header_buttonMass">
          <button className="buttonMass_button">МЕСТА</button>
          <button className="buttonMass_button">ТУРЫ</button>
          <button className="buttonMass_button">ОТЕЛИ</button>
          <button className="buttonMass_button">АВИАБИЛЕТЫ</button>
        </div>


        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle header_currency" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            USD
          </a>
        </div>
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle header_language" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            RU
          </a>
        </div>
        <button className="btn btn-outline-primary header_registration" >ВОЙТИ / РЕГИСТРАЦИЯ</button>
      </React.Fragment>
    );
  }
}
