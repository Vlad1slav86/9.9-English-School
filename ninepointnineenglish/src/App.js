import React from "react";
import Header from './components/Header';
import About from './components/About';
import Map from './components/Map';
import Booking from './components/Booking';
import CalendarSection from './components/CalendarSection';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <h1></h1>
      </div>
      <About />
      <Map />
      <Booking />
      <CalendarSection />
    </div>
  );
};

export default App;
