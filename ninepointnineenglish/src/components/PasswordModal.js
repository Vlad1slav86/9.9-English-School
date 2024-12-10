import React, { useState } from 'react';
import './PasswordModal.css'; 

const PasswordModal = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    onSubmit(password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="password-modal-overlay">
      <div className="password-modal-content">
        <h2>Password Required</h2>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={handleChange} 
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PasswordModal;
