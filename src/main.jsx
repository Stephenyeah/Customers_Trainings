import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './components/Home.jsx';
import Customerlist from './components/Customerlist.jsx';
import Traininglist from './components/Traininglist.jsx';
import Calendar from './components/Calendar';
import TrainingChart from './components/TrainingChart.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Customers_Trainings/" element={<App />}>
          <Route path="Home" index element={<Home />} />
          <Route path="Customerlist" element={<Customerlist />} />
          <Route path="Traininglist" element={<Traininglist />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="TrainingChart" element={<TrainingChart />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
