import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Ensure Home, About, Services, and Contact are correctly imported
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./header"; // Import your Navbar

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default theme set to dark

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/services" element={<Services darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}
