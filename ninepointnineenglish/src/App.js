import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Pricing from "./components/Pricing.js";
import Announcements from "./components/Announcements";
import Footer from "./components/Footer";
import CalendarSection from "./components/CalendarSection";
import Instructors from "./components/Instructors/Instructors.js";
import Recruitment from "./components/Recruitment.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Dropdown from "./components/Dropdown"; 
import "./App.css";

// Wrap the logic that needs useLocation inside a component that's rendered by Router
const ScrollToGalleryButton = () => {
  const location = useLocation();

  // Only render the button if we're on the home page
  return location.pathname === "/" ? <Dropdown /> : null;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      {/* Conditionally render the scroll button on the home page */}
      <ScrollToGalleryButton />

      <Routes>
        {/* Home route with the image gallery */}
        <Route
          path="/"
          element={
            <>
              <div className="main" id="main-section">
                <div className="main-image"></div>
              </div> 
              <Gallery id="gallery-section" /> 
            </>
          }
        />
        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/calendar" element={<CalendarSection />} />
        <Route path="/recruitment" element={<Recruitment />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
