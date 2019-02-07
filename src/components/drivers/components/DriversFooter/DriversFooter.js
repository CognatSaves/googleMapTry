import React, { Component } from 'react';
import './DriversFooter.css'

export default class DriversRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "drivers_footer">
        <div className="drivers_footer_block">
          <div className="drivers_footer_logo"/>
          <div className="drivers_footer_instagramm"/>
          <div className="drivers_footer_facebook"/>
          <div className="drivers_footerButtons">
            <button className="footerButtons_button">О сервисе</button>
            <button className="footerButtons_button">Партнёрам</button>
            <button className="footerButtons_button">Лицензионное соглашение</button>
            <button className="footerButtons_button">Помощь</button>
            <button className="footerButtons_button">Контакты</button>
          </div>
        </div>
      </div>
    );
  }

}
