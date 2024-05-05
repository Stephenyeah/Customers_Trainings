import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <Link to={"/"} className='nav-link'>Home</Link>
        <Link to={"/Customerlist"} className='nav-link'>Customerlist</Link>
        <Link to={"/Traininglist"} className='nav-link'>Traininglist</Link>
        <Link to={"/Calendar"} className='nav-link'>Calendar</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App