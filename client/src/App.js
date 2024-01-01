import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Registeration from './Components/Auth/Registeration/Registeration';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/login' Component={Login} exact />
            <Route path='/register' Component={Registeration} exact />
        </Routes>
    </BrowserRouter>
  )
}

export default App