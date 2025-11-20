import React from 'react';
import { Home, PlusCircle, MessageSquare, User, ShoppingBag, LogIn } from 'lucide-react'; // Added LogIn Icon
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import Auth Hook

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname;
  const { user } = useAuth(); // Check if user exists

  const tabs = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Post', icon: PlusCircle, path: '/create' },
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
    // Conditional Logic for the last tab
    user 
      ? { name: 'Profile', icon: User, path: '/profile' }
      : { name: 'Sign In', icon: LogIn, path: '/login' }
  ];

  // If we are on Login or Signup page, DON'T show the navbar
  if (activeTab === '/login' || activeTab === '/signup') return null;

  return (
    <>
      {/* DESKTOP TOP NAVIGATION */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 bg-background border-b border-surface z-50 px-8 py-4 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <ShoppingBag className="text-primary" size={32} />
            <span className="text-2xl font-bold text-white tracking-tight">Campus Marketplace</span>
        </div>

        <div className="flex items-center gap-8">
            {tabs.map(tab => (
                <button 
                    key={tab.name} 
                    onClick={() => navigate(tab.path)}
                    className={`flex items-center gap-2 font-bold transition hover:text-primary ${
                        activeTab === tab.path ? 'text-primary' : 'text-textMuted'
                    }`}
                >
                    <tab.icon size={20} />
                    <span>{tab.name}</span>
                </button>
            ))}
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-surface px-6 py-3 z-50">
        <div className="flex justify-between items-center px-4">
          {tabs.map((tab) => (
            <button 
              key={tab.name} 
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center w-12"
            >
              <tab.icon 
                size={24} 
                color={activeTab === tab.path ? '#00E359' : '#8E9B93'} 
              />
              <span className={`text-[10px] mt-1 ${activeTab === tab.path ? 'text-primary' : 'text-textMuted'}`}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;