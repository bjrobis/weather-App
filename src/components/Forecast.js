import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Key from '../Key';
import { useParams } from 'react-router-dom';


const Forecast = (props) => {

    const [data, setData] = useState(null);

    //get the id path from the URL
    let {id} = useParams();

 
    useEffect(() => {
    const getData = async () => {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${id}&days=5&aqi=no&alerts=no`
        );
        setData(response.data);
        console.log(data);
    };
    getData();
  }, []);

  let cards = data.forecast.forecastday.map(day => <Forecast 
    date={day.date} 
    icon={day.day.condition.icon}
    condition={day.day.condition.text}
    low={day.day.mintemp_f}
    high={day.day.maxtemp_f}
    sunrise={day.astro.sunrise}
    sunset={day.astro.sunset}

    />);


    if (data !== null) {
    return (
        <section className="two">
        <div className='forecastBox'>
          <h1 className='city'>{data.location.name}, {data.location.region}</h1>
          {cards}

        </div>
      </section>
    );
    } else {
        <div className='error'> There was a problem with getting the data</div>
      }
    };

export default Forecast;