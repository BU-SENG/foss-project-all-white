import React from 'react';
import { useAuthStore } from '../stores/useAuthStore';
import { Link } from 'react-router-dom';
import { Search, Plus, User, MessageCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Campus Market</h1>
              <p className="text-gray-400 text-xs">Buy & Sell in Your Campus</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors">
              Browse
            </Link>
            <Link to="/create" className="text-gray-300 hover:text-white font-medium transition-colors">
              Sell
            </Link>
            <Link to="/chat" className="text-gray-300 hover:text-white font-medium transition-colors">
              Messages
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/create" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors hidden sm:flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>List Item</span>
                </Link>
                <Link 
                  to="/profile" 
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors hidden sm:flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>My Items</span>
                </Link>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                  <button 
                    onClick={logout}
                    className="text-gray-400 hover:text-white font-medium transition-colors hidden sm:flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;