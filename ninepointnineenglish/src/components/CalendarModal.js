import React, { useState } from "react";
import './CalendarModal.css';

const CalendarModal = ({ isOpen, onClose, onEventCreate, selectedSlot }) => {
  const [eventTitle, setEventTitle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onEventCreate(eventTitle);
  };

  return (
    <div className="calendar-modal-overlay">
      <div className="calendar-modal-content">
        <h2>Add Event</h2>
        <input 
          type="text" 
          placeholder="Event title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)} 
        />
        {/* <div>
          <p>Start: {selectedSlot ? selectedSlot.start.toString() : ''}</p>
          <p>End: {selectedSlot ? selectedSlot.end.toString() : ''}</p>
        </div> */}
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit}>Add Event</button>
      </div>
    </div>
  );
};

export default CalendarModal;
