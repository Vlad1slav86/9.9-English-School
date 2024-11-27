import React, { useState } from "react";

const Booking = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Class booked for ${name} on ${date}`);
  };

  return (
    <section id="booking">
      <h2>Book a Class</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
