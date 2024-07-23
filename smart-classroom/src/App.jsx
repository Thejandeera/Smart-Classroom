import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
