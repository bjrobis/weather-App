import React, {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import {useGeolocated} from 'react-geolocated';

const ZipCode = (props) => {
let [location, setLocation] = useState(null);
let [zipCode, setZipCode] = useState("");


let navigate = useNavigate();

const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: true,
          timeout: Infinity,
      },
      userDecisionTimeout: null, 
  });

// eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    if (isGeolocationAvailable, isGeolocationEnabled, coords) {
      setLocation(`${coords.latitude},${coords.longitude}`);
      console.log(location);
    }

  })

const handleSubmit = (event) => {
  event.preventDefault();
  if (zipCode.length === 5) {
    navigate(`/${zipCode}`);
  } else {
    console.log('Please enter a valid zipcode');
  }
  
}

const handleLocation = (event) => {
  event.preventDefault();
  navigate(`/${location}`);
}

if (location !== null) {
  return (
<section>
<div className="currentBox">
  <form onSubmit={handleSubmit}>
<h3>Zipcode: <input 
  id="zipCode" 
  name="zipCode" 
  type="text" 
  value={zipCode}
  onChange={(e) => setZipCode(e.target.value)} /></h3>  
  <button type="submit">Submit Zipcode</button>
</form>
OR
  <form onSubmit={handleLocation}>
    <button type="submit">Use My Location</button>
  </form>


</div>
</section>


  )

} else {
return (
<section>
<div className="currentBox">
  <form onSubmit={handleSubmit}>
<h3>Zipcode: <input 
  id="zipCode" 
  name="zipCode" 
  type="text" 
  value={zipCode}
  onChange={(e) => setZipCode(e.target.value)} /></h3>  
  <button type="submit">Submit</button>
</form>
<p>Enable Location Services to Use Your Current Location</p>
</div>
</section>
)
}
}

export default ZipCode;
