import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Announcements from './components/Announcements';
import Footer from './components/Footer';
import CalendarSection from './components/CalendarSection';
import Instructors from './components/Instructors/Instructors.js';
import Contact from './components/Contact.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <div className="main"></div> {/* Main section with background */}
            <div className="image-gallery-wrapper"> {/* Add the wrapper for scrolling */}
              <div className="image-gallery">
                <div className="image1"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image2"></div>
                <div className="image3"></div>
                <div className="image3"></div>
                <div className="image3"></div>
                <div className="image3"></div>
                <div className="image4"></div>
              </div>
            </div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/calendar" element={<CalendarSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
