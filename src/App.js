import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './header';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import LoginModal from "./LoginModal";

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
