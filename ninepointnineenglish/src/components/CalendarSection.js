import React from "react";
import "./CalendarSection.css";

const CalendarSection = () => {
  return (
    <section id="calendar-section">
      <div className="calendar-container">
        <h2>カレンダー</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=59d85ae254cec09009955c24c9d4b09013bef6aa37aa0fe0bc22ccd2861db2f9%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Calendar"
        ></iframe>
      </div>
    </section>
  );
};

export default CalendarSection;
