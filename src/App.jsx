import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
// ... imports
import LoginScreen from './LoginScreen'; // Import
import SignupScreen from './SignupScreen'; // Import

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="pt-0 md:pt-20"> 
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} /> {/* Route */}
          <Route path="/signup" element={<SignupScreen />} /> {/* Route */}
          {/* ... other routes ... */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;