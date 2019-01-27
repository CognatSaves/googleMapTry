import React, { Component } from 'react';
import './RouteMenu.css'

const CityRouteTable = (props) => {
  const {cities, changeCity,removeCity} = props;
  let isVisibleArray = Array(cities.length).fill("visible");
  //non-visible x near first and last element-city - can not delete first & last;
  isVisibleArray[0]="hidden";
  isVisibleArray[isVisibleArray.length-1]="hidden";
  return(
    <tbody align="center">
    {cities.map((element,index)=>
      <tr key={index}>
        <td key={index+"el1"}>
          <input value={element} className="city_input" onChange={changeCity.bind(this,index)}/>
        </td>
        <td key={index+"el2"} style={{visibility: isVisibleArray[index]}} onClick={()=>removeCity(index)}>
          {'\u2613'}
        </td>
      </tr>
    )}
    </tbody>
  )
}

export default class HomeBody extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let parameters_text="Дополнительные параметры";
    return(
      <React.Fragment>
        <table className="routemenu_table">
          <CityRouteTable cities={this.props.cities} changeCity={this.props.changeCity} removeCity={this.props.removeCity}/>
        </table>
        <button className="routemenu_city_add_button" onClick={()=>this.props.addCity()}>+</button>
        <div className="routemenu_city_add_text">Добавить пункт назначения</div>
        <button className="routemenu_calendary">#</button>
        <input className="routemenu_date" placeholder="Дата отправления"></input>
        <button className="routemenu_parameters">{parameters_text}</button>
        <button className="routemenu_search" onClick={()=>this.props.goToDrivers()}>ПОИСК</button>
        <div className="routemenu_comment">*Возврат в точку отправления в этот же день бесплатно</div>
      </React.Fragment>
    );
  }
}
