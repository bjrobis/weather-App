import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Forecast = (props) => {
    let url = props.data;

    let [hourly, setHourly] = useState();

    useEffect(() => {
        axios.get(`${url}`)
       .then(response => {
         // handle success
         setHourly(response.data);
       })
       .catch(error => {
         // handle error
         console.log("Error fetching and parsing data", error);
       });
       },[]);

       console.log(url);

    return (
        <div>


        </div>

    );

    };

export default Forecast;