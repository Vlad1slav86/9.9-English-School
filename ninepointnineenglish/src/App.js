import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Map from './components/Map';
import Booking from './components/Booking';
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
          <div className="main">
            {/* <h1>Welcome to Nine Point Nine English!</h1> */}
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<Map />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<CalendarSection />} />
      </Routes>

    </Router>
  );
};

export default App;
