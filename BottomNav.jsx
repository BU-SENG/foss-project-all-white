import React from 'react';
import { Home, Search, PlusCircle, MessageSquare, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BottomNav = ({ activeTab }) => {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Home', icon: Home, id: 'home', path: '/' },
    { name: 'Search', icon: Search, id: 'search', path: '/search' },
    { name: 'Post', icon: PlusCircle, id: 'post', path: '/create', highlight: true },
    { name: 'Chat', icon: MessageSquare, id: 'chat', path: '/chat' },
    { name: 'Profile', icon: User, id: 'profile', path: '/profile' }, // Mapping Profile to MyListings
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0B1410] border-t border-[#13231B] px-6 py-3 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {tabs.map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center justify-center w-12"
          >
            {tab.highlight ? (
              <div className="bg-[#00E359] p-3 rounded-full -mt-10 shadow-lg border-4 border-[#0B1410] hover:scale-105 transition">
                <tab.icon size={24} color="#000" />
                <span className="text-[10px] font-bold text-black mt-1 block">{tab.name}</span>
              </div>
            ) : (
              <>
                <tab.icon 
                  size={24} 
                  color={activeTab === tab.id ? '#00E359' : '#8E9B93'} 
                  className="transition-colors"
                />
                <span className={`text-[10px] mt-1 transition-colors ${activeTab === tab.id ? 'text-[#00E359]' : 'text-[#8E9B93]'}`}>
                  {tab.name}
                </span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;