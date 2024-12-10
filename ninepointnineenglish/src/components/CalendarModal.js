import React, { useState } from 'react';
import './CalendarModal.css'; // Reusing modal styles for consistency

const CalendarModal = ({
  isOpen,
  onClose,
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  actionType,
  selectedEvent,
  selectedSlot,
}) => {
  const [title, setTitle] = useState(selectedEvent?.title || '');

  // Reset the modal state when opened/closed
  React.useEffect(() => {
    if (isOpen) {
      setTitle(selectedEvent?.title || '');
    }
  }, [isOpen, selectedEvent]);

  const handleCreate = () => {
    if (title.trim() !== '') {
      onEventCreate(title);
    } else {
      alert('Please enter a valid title.');
    }
  };

  const handleUpdate = () => {
    if (title.trim() !== '') {
      const updatedEvent = { ...selectedEvent, title };
      onEventUpdate(updatedEvent);
    } else {
      alert('Please enter a valid title.');
    }
  };

  const handleDelete = () => {
    
      onEventDelete(selectedEvent);
    
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="calendar-modal-overlay">
      <div className="calendar-modal-content">
        <h2>{actionType === 'create' ? 'Add Event' : 'Edit Event'}</h2>

        {actionType === 'create' && (
          <div>
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleCreate}>Add Event</button>
          </div>
        )}

        {actionType === 'update' && (
          <div>
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <button onClick={handleUpdate}>Update Event</button>
              <button onClick={handleDelete} style={{ backgroundColor: 'red' }}>
                Delete Event
              </button>
            </div>
          </div>
        )}

        <button onClick={onClose} style={{ backgroundColor: '#ccc' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
