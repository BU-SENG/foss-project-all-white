import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from './stores/useAuthStore';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

// Import all your screens
import HomeScreen from './components/HomeScreen';
import CreateListingScreen from './components/CreateListingScreen';
import ItemDetailScreen from './components/ItemDetailScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MyListingsScreen from './components/MyListingsScreen';
import ChatListScreen from './components/ChatListScreen';
import ChatScreen from './components/ChatScreen';

function App() {
  const { loadUser, user } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <Navbar />
      <div className="pt-20 md:pt-0">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={user ? <CreateListingScreen /> : <LoginScreen />} />
          <Route path="/item/:id" element={<ItemDetailScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={user ? <MyListingsScreen /> : <LoginScreen />} />
          <Route path="/chat" element={user ? <ChatListScreen /> : <LoginScreen />} />
          <Route path="/chat/:id" element={user ? <ChatScreen /> : <LoginScreen />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;