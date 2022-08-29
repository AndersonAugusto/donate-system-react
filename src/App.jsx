import React from 'react'
import './App.scss';
import './reset.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Navbar from './pages/navbar/navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes />
    </BrowserRouter>
  );
}

export default App;
