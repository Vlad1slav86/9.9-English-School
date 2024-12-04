import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarSection.css';
import PasswordModal from './PasswordModal'; 
import CalendarModal from './CalendarModal';

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
  
  const [password, setPassword] = useState('1234');  // Client's password
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // To track if the client is authenticated
  const [showPasswordModal, setShowPasswordModal] = useState(false); // For showing the password modal
  const [showCalendarModal, setShowCalendarModal] = useState(false); // For showing the calendar modal
  const [selectedSlot, setSelectedSlot] = useState(null); // Store selected time slot for event creation
  
  // Handle password authentication
  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === password) {
      setIsAuthenticated(true);
      setShowPasswordModal(false); // Close modal on successful authentication
    } else {
      alert('Incorrect password!');
    }
  };

  const handlePasswordClose = () => {
    setShowPasswordModal(false);
  };

  // Handle selecting a slot to add an event
  const handleSelect = ({ start, end }) => {
    if (!isAuthenticated) {
      setShowPasswordModal(true); // Show password modal for authentication
      return;
    }
    
    // Store the selected slot to pass it to the modal
    setSelectedSlot({ start, end });
    setShowCalendarModal(true); // Show the calendar modal
  };

  const handleCalendarModalClose = () => {
    setShowCalendarModal(false);
  };

  // Handle event creation from the calendar modal
  const handleEventCreate = (title) => {
    if (title) {
      const newEvent = {
        title,
        start: new Date(selectedSlot.start),
        end: new Date(selectedSlot.end),
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setShowCalendarModal(false); // Close the modal after event creation
    }
  };

  // Handle event deletion
  const handleEventDelete = (eventToDelete) => {
    if (!isAuthenticated) {
      setShowPasswordModal(true); // Show modal for authentication
      return;
    }

    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event !== eventToDelete)
      );
    }
  };

  // Handle event update (simply edit the title in this case)
  const handleEventUpdate = (eventToUpdate) => {
    if (!isAuthenticated) {
      setShowPasswordModal(true); // Show modal for authentication
      return;
    }

    const newTitle = prompt('Edit Event Title:', eventToUpdate.title);
    if (newTitle && newTitle !== eventToUpdate.title) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event === eventToUpdate ? { ...event, title: newTitle } : event
        )
      );
    }
  };

  // Handle view changes to ensure proper event updates
  const handleViewChange = (view) => {
    console.log('View changed:', view);
    setEvents((prevEvents) => [...prevEvents]); // Force refresh of events when the view changes
  };

  return (
    <div className="calendar-container">
      {/* Password Modal */}
      <PasswordModal 
        isOpen={showPasswordModal} 
        onClose={handlePasswordClose} 
        onSubmit={handlePasswordSubmit} 
      />
      
      {/* Calendar Modal */}
      <CalendarModal
        isOpen={showCalendarModal}
        onClose={handleCalendarModalClose}
        onEventCreate={handleEventCreate}
        selectedSlot={selectedSlot}
      />
      
      <h2 className="calendar-header">School Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        onView={handleViewChange} // Handles view changes
        style={{ height: 500 }}
        eventPropGetter={(event) => ({
          style: { backgroundColor: '#0872a8', color: 'white', borderRadius: '5px' },
        })}
        onSelectEvent={(event) => {
          // Event actions for clicking an event
          const action = window.prompt('Choose action: "delete" or "update"', 'delete');
          if (action === 'delete') {
            handleEventDelete(event);
          } else if (action === 'update') {
            handleEventUpdate(event);
          }
        }}
      />
    </div>
  );
};

export default CalendarSection;
