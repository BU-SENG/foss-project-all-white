import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import HomeScreen from './HomeScreen';
// Removed SearchScreen import
import CreateListingScreen from './CreateListingScreen';
import ChatListScreen from './ChatListScreen';
import MyListingsScreen from './MyListingsScreen';
import ItemDetailScreen from './ItemDetailScreen';

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <div className="pt-0 md:pt-20"> 
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* Removed Search Route */}
          <Route path="/create" element={<CreateListingScreen />} />
          <Route path="/chat" element={<ChatListScreen />} />
          <Route path="/profile" element={<MyListingsScreen />} />
          <Route path="/item/:id" element={<ItemDetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;