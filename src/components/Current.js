import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Current = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //get the id path from the URL
    let {id} = useParams();
    
    let navigate = useNavigate();

 
    useEffect(() => {
    const getData = async () => {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=46eef890675e46b7b7d172327233001&q=${id}&days=5&aqi=no&alerts=no`
        );
        setData(response.data);
        setIsLoading(false);
    };
    getData();
  }, [id]);

  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/forecast/${id}`);
  }

    if (isLoading === false) {
    return (
    <React.Fragment>
      <section>
        <div className='currentBox'>
            <h1 className="city">{data.location.name}, {data.location.region}</h1>
            <p><img className='icon' src={data.current.condition.icon} alt={data.current.condition.text} />{data.current.condition.text} </p>

            <p>Temperature: {data.current.temp_f} F</p>
            <p>UV Index: {data.current.uv}</p>
            <p>Humidity: {data.current.humidity}%</p>
            <p>Precipitation: {data.current.precip_in} Inches</p>

            <form onSubmit={handleSubmit}>
            <button className="forecastButton" type="submit">5 Day Forecast</button>
            </form>
       </div>
      </section>

      
    </React.Fragment>

    );
    } else {
      return (
      <div className='error'> There was a problem with getting the data</div>
      )
    }
  }


export default Current;