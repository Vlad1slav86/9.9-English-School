import React from "react";
import Instructor from "./Instructor";
import "./Instructors.css";

const Instructors = () => {
  const instructorData = [
    {
      name: "Paul Price",
      image: "/public/images/",
      bio: "John has 10 years of experience teaching English in Japan.",
    },
    {
      name: "Jane Doe",
      image: "/images/jane.jpg",
      bio: "Jane specializes in teaching conversational English.",
    },
    {
      name: "Michael Lee",
      image: "/images/michael.jpg",
      bio: "Michael is passionate about helping students achieve fluency.",
    },
  ];

  return (
    <section id="instructors">
      <h2>Meet Our Instructors</h2>
      <div className="instructors-container">
        {instructorData.map((instructor, index) => (
          <Instructor
            key={index}
            name={instructor.name}
            image={instructor.image}
            bio={instructor.bio}
          />
        ))}
      </div>
    </section>
  );
};

export default Instructors;
