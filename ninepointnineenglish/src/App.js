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
          <div className="main"></div>
          <div className="image-gallery">
          <img src="/images/student_erika_haruto_osuke.jpg" alt="Erika" />
          <img src="/images/student_reisuke.jpg" alt="Reisuke" />
          <img src="/images/sutudent_aoi_DSC02296.jpg" alt="Aoi" />
          <img src="/images/sutudent_hinata_DSC02012.jpg" alt="Hinata" />
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
