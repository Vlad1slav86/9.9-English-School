// Instructor.js
import React from "react";

const Instructor = ({ name, image, bio }) => {
  return (
    <div className="instructor">
      <img src={image} alt={name} className="instructor-image" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default Instructor;
