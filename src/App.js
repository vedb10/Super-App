import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import RegistrationPage from './Superapp/RegistrationPage';
import Category from './Superapp/Category';
import Homepage from './Superapp/Homepage';
import Entertainement from './Superapp/Entertainement';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
              <Route path="/" element={<RegistrationPage />} />
              <Route path="category" element={<Category />} />
              <Route path="homepage" element={<Homepage />}/>
              <Route path="entertainment" element={<Entertainement />}/>

                       
            </Routes>
    

    </div>
  );
}

export default App;
