import React, { Component } from 'react';
import './DriversRoute.css'

export default class DriversRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          cities:['Минск','Константинополь']
        };
    }
    render() {
      let isVisibleArray = Array(this.state.cities.length).fill("visible");
      isVisibleArray[isVisibleArray.length-1]="hidden";
      let left=128;let size=32-4;let delta=8;
        return (
          <div className = "drivers_route">
            <div className="route_date">
              <div className="route_date_text">Ваш индивидуальный маршрут на:</div>
              <div className="route_date_value">Вт, 29 мая 1453</div>
            </div>
            <div className="route_show">
              {this.state.cities.map((element, index) =>
              <div className="route_show_element">
                <div className="route_show_icon" style={{left: left*index+"px"}}/>
                <div className="route_show_text" style={{left: left*index+size+delta+"px"}}>{this.state.cities[index]}</div>
                <div className="route_show_line" style={{visibility: isVisibleArray[index], left: left*index+size+"px"}}>__________________</div>
              </div>
              )}
            </div>
            <div className="route_time_text">Время в пути без остановок:</div>
            <div className="route_time_value"><p1>24 ч. 18 мин.</p1> <p2>2003 км</p2></div>
            <div className="route_comment">*Возврат в точку отправления в этот же день бесплатно</div>
          </div>
        );
    }

}
