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
import Gallery from './components/Gallery.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        {/* Home route with the image gallery */}
        <Route path="/" element={
          <>
            <div className="main"></div> {/* Main section with background */}
            <Gallery /> {/* Use Gallery here */}
          </>
        } />
        {/* Other Routes */}
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
