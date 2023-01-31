import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Key from '../Key';
import { useParams } from 'react-router-dom';


const Current = (props) => {
    const [data, setData] = useState(null);

    //get the id path from the URL
    let {id} = useParams();

 
    useEffect(() => {
    const getData = async () => {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${Key}&q=${id}`
        );
        setData(response.data);
        console.log(data);
    };
    getData();
    // eslint-disable-next-line 
  }, []);

  console.log(data);

    if (data !== null) {
    return (
        <div className='currentBox'>
            <h1 className='city'>{data.location.name}, {data.location.region}</h1>
            <p><img className='icon' src={data.current.condition.icon} alt={data.current.condition.text} />{data.current.condition.text} </p>

            <p>Temperature: {data.current.temp_f} F</p>
            <p>UV Index: {data.current.uv}</p>
            <p>Humidity: {data.current.humidity}%</p>
            <p>Precipitation: {data.current.precip_in} Inches</p>
       </div>

    );
    } else {
      <div className='error'> There was a problem with getting the data</div>
    }
  }


export default Current;