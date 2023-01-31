import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
    <React.Fragment>
    <div className='weatherApp'>
    <Link to='/' className='title'>Weather App</Link>
    </div>
        
    </React.Fragment>
    )
};

export default Header;