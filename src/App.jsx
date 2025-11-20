import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import HomeScreen from './HomeScreen';
import CreateListingScreen from './CreateListingScreen';
import ChatListScreen from './ChatListScreen';
import ChatScreen from './ChatScreen'; // Import the new screen
import MyListingsScreen from './MyListingsScreen';
import ItemDetailScreen from './ItemDetailScreen';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="pt-0 md:pt-20"> 
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateListingScreen />} />
          <Route path="/chat" element={<ChatListScreen />} />
          
          {/* New Dynamic Route for Chatting */}
          <Route path="/chat/:id" element={<ChatScreen />} />
          
          <Route path="/profile" element={<MyListingsScreen />} />
          <Route path="/item/:id" element={<ItemDetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;