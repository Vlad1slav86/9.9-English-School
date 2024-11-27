import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section id="calendar">
      <h2>Class Schedule</h2>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </section>
  );
};

export default CalendarSection;
