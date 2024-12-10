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

  const [password, setPassword] = useState('1234');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [actionType, setActionType] = useState('create'); // Default modal action: 'create'

  // Handle password authentication
  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === password) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
    } else {
      alert('Incorrect password!');
    }
  };

  const handlePasswordClose = () => {
    setShowPasswordModal(false);
  };

  // Handle slot selection for creating a new event
  const handleSelect = ({ start, end }) => {
    if (!isAuthenticated) {
      setShowPasswordModal(true);
      return;
    }
    setSelectedSlot({ start, end });
    setActionType('create');
    setShowCalendarModal(true);
  };

  // Handle event click for update/delete
  const handleEventClick = (event) => {
    if (!isAuthenticated) {
      setShowPasswordModal(true);
      return;
    }
    setSelectedEvent(event);
    setActionType('update');
    setShowCalendarModal(true);
  };

  // Create a new event
  const handleEventCreate = (title) => {
    if (title) {
      const newEvent = { title, start: new Date(selectedSlot.start), end: new Date(selectedSlot.end) };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setShowCalendarModal(false);
    }
  };

  // Update an existing event
  const handleEventUpdate = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event === selectedEvent ? updatedEvent : event
      )
    );
    setShowCalendarModal(false);
  };

  // Delete an event
  const handleEventDelete = (eventToDelete) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event !== eventToDelete)
    );
    setShowCalendarModal(false);
  };

  // Close the calendar modal
  const handleCalendarModalClose = () => {
    setShowCalendarModal(false);
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
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
        actionType={actionType}
        selectedEvent={selectedEvent}
        selectedSlot={selectedSlot}
      />

<h2>School Calendar</h2>


      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect} // Trigger modal for creating events
        onSelectEvent={(event) => handleEventClick(event)} // Trigger modal for event update/delete
        style={{ height: 500 }}
        eventPropGetter={(event) => ({
          style: { backgroundColor: '#0872a8', color: 'white', borderRadius: '5px' },
        })}
      />
    </div>
  );
};

export default CalendarSection;
