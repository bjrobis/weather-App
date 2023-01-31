import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ZipCode = () => {
let [zipCode, setZipCode] = useState("");
//var numbers = /^[0-9]+$/; 

let navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  if (zipCode.length === 5) {
    navigate(`/${zipCode}`);
  } else {
    console.log('Please enter a valid zipcode');
  }
  
}

return (
<div className="zipCode">
  <form onSubmit={handleSubmit}>
<h3>Zipcode: <input 
  id="zipCode" 
  name="zipCode" 
  type="text" 
  value={zipCode}
  onChange={(e) => setZipCode(e.target.value)} /></h3>  
  <button type="submit">Submit</button>
</form>
</div>
)
}

export default ZipCode;
