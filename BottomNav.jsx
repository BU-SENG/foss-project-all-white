import { Home, Search, PlusCircle, MessageSquare, User } from 'lucide-react';

const BottomNav = ({ activeTab, onNavigate }) => {
  const tabs = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Search', icon: Search, id: 'search' },
    { name: 'Post', icon: PlusCircle, id: 'post', highlight: true },
    { name: 'Chat', icon: MessageSquare, id: 'chat' },
    { name: 'Profile', icon: User, id: 'profile' },
  ];

  // Define colors as constants for cleaner logic
  const activeColor = '#00E359';
  const inactiveColor = '#8E9B93';
  const backgroundColor = '#0B1410';

  return (
    // Bottom Nav Bar
    <div className="fixed bottom-0 left-0 right-0 bg-['#0B1410'] border-t border-['#13231B'] px-6 py-3 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {tabs.map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => onNavigate(tab.id)}
            // **Accessibility Improvement:** Added aria-label for screen readers
            aria-label={`Maps to ${tab.name}`} 
            className="flex flex-col items-center justify-center w-14 group transition-colors duration-200"
          >
            {tab.highlight ? (
              // Highlighted 'Post' button
              <div 
                className={`bg-[${activeColor}] p-3 rounded-full -mt-10 shadow-xl border-4`}
                style={{ borderColor: backgroundColor }} // Use style for dynamic background color border
              >
                <tab.icon size={24} color="#000" />
                {/* **Improvement:** Removed redundant text inside the icon div */}
              </div>
            ) : (
              // Standard navigation item
              <>
                <tab.icon 
                  size={24} 
                  // Use inline logic for icon color
                  color={activeTab === tab.id ? activeColor : inactiveColor} 
                  aria-hidden="true" // Icon is purely decorative
                />
                <span 
                  className="text-[10px] mt-1 font-medium transition-colors duration-200"
                  // Use inline logic for text color
                  style={{ color: activeTab === tab.id ? activeColor : inactiveColor }}
                >
                  {tab.name}
                </span>
              </>
            )}
            {/* **Improvement:** Place the highlighted tab name outside the icon circle for consistency */}
            {tab.highlight && (
                <span className="text-[10px] font-medium text-[#00E359] mt-1">
                    {tab.name}
                </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;