import React from 'react';

const ForecastCard = (props) => {
  let date = props.date;
  let icon = props.icon;
  let condition = props.condition;
  let low = props.low;
  let high = props.high;
  let sunrise = props.sunrise;
  let sunset = props.sunset;


    return (
      <div className='forecastCard'>
      <p className="date">{date}</p>
      <p className="marginZero"><img className='icon' src={icon} alt={condition} />{condition} </p>
      <p className="marginZero">Low: {low} & High: {high} Degrees F</p>
      <p className="marginZero">Sunrise: {sunrise} & Sunset: {sunset}</p>
  
      </div>


    );

    };

export default ForecastCard;