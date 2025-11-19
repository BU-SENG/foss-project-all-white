import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CreateListingScreen from './CreateListingScreen';
import ChatListScreen from './ChatListScreen';
import MyListingsScreen from './MyListingsScreen';
import ItemDetailScreen from './ItemDetailScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/create" element={<CreateListingScreen />} />
        <Route path="/chat" element={<ChatListScreen />} />
        <Route path="/profile" element={<MyListingsScreen />} />
        <Route path="/item/:id" element={<ItemDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;