import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import HomeScreen from './HomeScreen';
import CreateListingScreen from './CreateListingScreen';
import ChatListScreen from './ChatListScreen'; 
import ChatScreen from './ChatScreen';
import MyListingsScreen from './MyListingsScreen';
import ItemDetailScreen from './ItemDetailScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="pt-0 md:pt-20"> 
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomeScreen />} />
          
          {/* --- FIX: POST PAGE MUST RENDER CreateListingScreen --- */}
          <Route path="/create" element={<CreateListingScreen />} />
          
          {/* Chat Routes */}
          <Route path="/chat" element={<ChatListScreen />} />
          <Route path="/chat/:id" element={<ChatScreen />} />
          
          {/* Profile & Auth Routes */}
          <Route path="/profile" element={<MyListingsScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          
          {/* Item Detail */}
          <Route path="/item/:id" element={<ItemDetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;