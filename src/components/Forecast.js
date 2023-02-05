import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Key from '../Key';
import { useParams } from 'react-router-dom';
import ForecastCard from './ForecastCard';


const Forecast = (props) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //get the id path from the URL
    let {id} = useParams();

 
    useEffect(() => {
      const getData = async () => {
          const response = await axios.get(
              `http://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${id}&days=5&aqi=no&alerts=no`
          );
          setData(response.data);
          setIsLoading(false);
      };
      getData();
    }, [id]);

    console.log(data);
   if (isLoading === false) {
   var cards = data.forecast.forecastday.map(day => <ForecastCard 
    date={day.date} 
    icon={day.day.condition.icon}
    condition={day.day.condition.text}
    low={day.day.mintemp_f}
    high={day.day.maxtemp_f}
    sunrise={day.astro.sunrise}
    sunset={day.astro.sunset}
    key={day.date}

    />);
   }

    if (cards) {
      return (
        <section className="two">
        <div className='forecastBox'>
          <h1 className='city'>{data.location.name}, {data.location.region}</h1>
          {cards}

        </div>
      </section>
    );
    } else {
      return (
        <div className='error'> There was a problem with getting the data</div>
      )
      }
    };

export default Forecast;