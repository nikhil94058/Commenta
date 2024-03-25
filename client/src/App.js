

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { HomePage } from './Components/Homepage'
import Error from './Components/Error';
import { Hero } from './Components/Hero';
import { Login } from './Components/Login';
import Signup from './Components/Signup';

import LeaderBoard from './Components/LeaderBoard';


function App() {

  return (


    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/err" element={<Error />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<LeaderBoard />} />
      </Routes>
    </div>


  );
}

export default App;
