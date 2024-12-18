import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import Home from './components/home/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login />} />
      {/* <Route path='/login' element={<Login />} /> */}
    </Routes>
  );
}

export default App;
