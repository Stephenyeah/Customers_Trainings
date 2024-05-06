import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <Link to={"/Customers_Trainings/"} className='nav-link'>Home</Link>
        <Link to={"/Customers_Trainings/Customerlist"} className='nav-link'>Customerlist</Link>
        <Link to={"/Customers_Trainings/Traininglist"} className='nav-link'>Traininglist</Link>
        <Link to={"/Customers_Trainings/Calendar"} className='nav-link'>Calendar</Link>
        <Link to={"/Customers_Trainings/TrainingChart"} className='nav-link'>TrainingChart</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App