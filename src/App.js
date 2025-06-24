// This is for the routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import LandingPage from './LandingPage';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
