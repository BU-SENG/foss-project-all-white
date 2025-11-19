import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the new Navbar

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CreateListingScreen from './CreateListingScreen';
import ChatListScreen from './ChatListScreen';
import MyListingsScreen from './MyListingsScreen';
import ItemDetailScreen from './ItemDetailScreen';

function App() {
  return (
    <Router>
      <Navbar /> {/* This sits outside the routes so it's always visible */}
      
      {/* This div pushes content down on desktop so the Top Bar doesn't cover it */}
      <div className="pt-0 md:pt-20"> 
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
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