import React from 'react';
import CalendarSection from './CalendarSection'; // Import the calendar component
import './Announcements.css';

const Announcements = () => {
  const announcements = [
    {
      title: 'New English Classes Starting Soon!',
      date: '2024年12月1日',
      description: 'We are launching new English classes for beginners. Don\'t miss out on this opportunity!',
    },
    {
      title: 'Holiday Hours Notice',
      date: '2024年12月10日',
      description: 'Our school will be closed from December 24th to January 3rd for the holiday season.',
    },
    {
      title: 'Special Offer for New Students',
      date: '2024年11月25日',
      description: 'New students can get 10% off their first month. Join us now and start learning!',
    },
  ];

  return (
    <section id="announcements">
      <h2>Announcements</h2>
      <div className="announcement-container">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p className="announcement-date">{announcement.date}</p>
            <p>{announcement.description}</p>
          </div>
        ))}
      </div>
      {/* Add the Calendar Section below the announcements */}
      {/* <div className="calendar-section">
        <CalendarSection />
      </div> */}
    
    
      <div className="Calendar-container">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=59d85ae254cec09009955c24c9d4b09013bef6aa37aa0fe0bc22ccd2861db2f9%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              width="840" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
    
    
    
    </section>
  );
};

export default Announcements;
