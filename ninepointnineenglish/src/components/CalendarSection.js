import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarSection.css';

const localizer = momentLocalizer(moment);

const CalendarSection = () => {
  const [events, setEvents] = useState([
    {
      title: 'New Class Start',
      start: new Date(2024, 11, 1, 10, 0),
      end: new Date(2024, 11, 1, 11, 0),
    },
    {
      title: 'Holiday Break',
      start: new Date(2024, 11, 24),
      end: new Date(2025, 0, 3),
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = prompt('Enter Event Title:');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="calendar-container">
      {/* <h2 className="calendar-header">School Calendar</h2> */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
        eventPropGetter={(event) => ({
          style: { backgroundColor: '#0872a8', color: 'white', borderRadius: '5px' },
        })}
      />
    </div>
  );
};

export default CalendarSection;
