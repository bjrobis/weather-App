import React from 'react';
import ZipCode from './components/ZipCode'; 
import {Route, Routes} from 'react-router-dom';


//Import Components
import Header from './components/Header';
import Current from './components/Current';


function App() {
  
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<ZipCode  />} />
        <Route path='/:id' element={<Current />} />
      </Routes>
    </React.Fragment>
    )
  }



export default App;
