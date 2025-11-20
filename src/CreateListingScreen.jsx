import React, { useState } from 'react'; // Imported useState
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatListScreen = () => {
  const navigate = useNavigate();
  
  // 1. State for Search Query
  const [searchQuery, setSearchQuery] = useState('');

  const chats = [
    { 
      id: 1, 
      name: 'Jessica Eguasa', 
      msg: 'Hey, is the textbook still available?', 
      time: '10:30 AM', 
      unread: 2,
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: 2, 
      name: 'Chigere-Isaac', 
      msg: 'Perfect! I can meet you at the library.', 
      time: '9:45 AM', 
      unread: 0,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    { 
      id: 3, 
      name: 'Roseline Edward', 
      msg: 'Is the price negotiable?', 
      time: 'Yesterday', 
      unread: 0,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80'
    },
  ];

  // 2. Filtering Logic
  const filteredChats = chats.filter(chat => {
    const lowerQuery = searchQuery.toLowerCase();
    // Check if search text is in the Name OR the Message
    return chat.name.toLowerCase().includes(lowerQuery) || 
           chat.msg.toLowerCase().includes(lowerQuery);
  });
  
  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-3xl mx-auto pt-6 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Messages</h1>
        
        {/* Search Input */}
        <div className="bg-surface flex items-center px-4 py-3 rounded-xl mb-8 border border-transparent focus-within:border-primary transition">
          <Search className="text-textMuted" size={20} />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="ml-3 flex-1 bg-transparent outline-none text-white placeholder-textMuted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on type
          />
        </div>

        <div className="space-y-2">
          {/* 3. Render the Filtered List */}
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div 
                key={chat.id} 
                onClick={() => navigate(`/chat/${chat.id}`)} 
                className="flex items-center cursor-pointer hover:bg-surface p-4 rounded-2xl transition group border border-transparent hover:border-surface/50"
              >
                <img src={chat.image} className="w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition" />
                <div className="flex-1 ml-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-lg group-hover:text-primary transition">{chat.name}</h4>
                    <span className={`text-xs ${chat.unread ? 'text-primary font-bold' : 'text-textMuted'}`}>{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate max-w-[200px] md:max-w-md ${chat.unread ? 'text-white font-medium' : 'text-textMuted'}`}>{chat.msg}</p>
                    {chat.unread > 0 && (
                      <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold shadow-[0_0_10px_rgba(0,227,89,0.5)]">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback if no chats match
            <div className="text-center text-textMuted py-10">
              <p>No conversations found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ChatListScreen;