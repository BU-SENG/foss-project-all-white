import React from 'react';
import { Home, PlusCircle, MessageSquare, User, ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname;

  const tabs = [
    { name: 'Home', icon: Home, path: '/' },
    // Post is now treated as a regular tab in the list, but highlighted
    { name: 'Post', icon: PlusCircle, path: '/create', highlight: true },
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

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
                    {/* On desktop, Post looks like a normal link but we can color it green if active */}
                    <tab.icon size={20} />
                    <span>{tab.name}</span>
                </button>
            ))}
            {/* REMOVED THE SEPARATE GREEN BUTTON FROM HERE */}
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
              {tab.highlight ? (
                // The Floating Plus Button
                <div className="bg-primary p-3 rounded-full -mt-10 shadow-lg border-4 border-background flex flex-col items-center justify-center">
                  <tab.icon size={24} color="#000" />
                  {/* Caption added inside the circle for the floating button */}
                  <span className="text-[10px] font-bold text-black mt-0.5">{tab.name}</span>
                </div>
              ) : (
                <>
                  <tab.icon 
                    size={24} 
                    color={activeTab === tab.path ? '#00E359' : '#8E9B93'} 
                  />
                  <span className={`text-[10px] mt-1 ${activeTab === tab.path ? 'text-primary' : 'text-textMuted'}`}>
                    {tab.name}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;