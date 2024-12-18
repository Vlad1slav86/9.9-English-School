import React, { useState, useEffect } from "react";
import "./Dropdown.css"; // Ensure this file is properly imported

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle scrolling visibility
  const handleScroll = () => {
    // Check if the page has been scrolled close to the bottom
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 200) {
      setIsVisible(false); // Hide the button when near the bottom
    } else {
      setIsVisible(true); // Show the button when not near the bottom
    }
  };

  // Scroll event listener for visibility change
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = () => {
    const section = document.getElementById("main-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <button className="dropdown-toggle" onClick={handleScrollToSection}>
        <svg className="dropdown-icon" viewBox="0 0 24 24" focusable="false">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
        </svg>
      </button>
    )
  );
};

export default Dropdown;
