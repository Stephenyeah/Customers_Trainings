import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment"; 
import { fetchTrainings } from "../trainingapi";


const localizer = momentLocalizer(moment); 

function Calendar () {
    const [trainingData, setTrainingData] = useState([]);
    const [calendarEvents, setCalendarEvents] = useState([]);

    const mapToCalendar = (trainings) => {
        return trainings.map((training) => ({
          title: `${training.activity} / ${training.customer.firstname} ${training.customer.lastname} `,
          start: new Date(training.date),
          end: moment(training.date)
            .add(training.duration, 'minutes')
            .toDate(),
        }))
      }

    useEffect(() => {
        fetchTrainings()
      .then(data => {
        setTrainingData(data)
        setCalendarEvents(mapToCalendar(data))
      })
      .catch(error => console.error('Failed fetching trainings:', error))
  }, [])

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start" 
        endAccessor="end" 
        views={['month', 'week', 'day']}
        style={{ height: 500 }} 
        className="custom-calendar event-description event-date event-box"
      />
    </div>
  );
};

export default Calendar;