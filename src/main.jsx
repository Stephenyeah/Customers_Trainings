import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css';

import App from './App.jsx'
import Home from './components/Home.jsx'
import Customerlist from './components/Customerlist.jsx'
import Traininglist from './components/Traininglist.jsx'
import Calendar from './components/Calendar'
import TrainingChart from './components/TrainingChart.jsx'


const router = createBrowserRouter([
  {
    history 
    routes,
    path:"/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "Customerlist",
        element: <Customerlist />
      },
      {
        path: "Traininglist",
        element: <Traininglist />
      },
      {
        path: "Calendar",
        element: <Calendar />
      },
      {
        path: "TrainingChart",
        element: <TrainingChart />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)