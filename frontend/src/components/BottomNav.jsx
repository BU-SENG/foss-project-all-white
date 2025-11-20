import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus, User, MessageCircle } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 border-t border-gray-700 fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex justify-around">
        <Link 
          to="/" 
          className={`flex flex-col items-center py-3 px-4 ${
            location.pathname === '/' ? 'text-blue-400' : 'text-gray-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/create" 
          className={`flex flex-col items-center py-3 px-4 ${
            location.pathname === '/create' ? 'text-blue-400' : 'text-gray-400'
          }`}
        >
          <Plus className="w-5 h-5" />
          <span className="text-xs mt-1">Sell</span>
        </Link>
        <Link 
          to="/profile" 
          className={`flex flex-col items-center py-3 px-4 ${
            location.pathname === '/profile' ? 'text-blue-400' : 'text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link 
          to="/chat" 
          className={`flex flex-col items-center py-3 px-4 ${
            location.pathname === '/chat' ? 'text-blue-400' : 'text-gray-400'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs mt-1">Chat</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;