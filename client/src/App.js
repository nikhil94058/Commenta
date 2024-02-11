

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { HomePage } from './Components/Homepage'
import Error from './Components/Error';
import { Hero } from './Components/Hero';


function App() {

  return (


    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/err" element={<Error />} />
        <Route path="/t" element={<Hero />} />
      </Routes>
    </div>


  );
}

export default App;
