import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatListScreen = () => {
  const navigate = useNavigate();

  // Updated Chat Data with specific Student Images
  const chats = [
    { 
      id: 1, 
      name: 'Aria Brooks', 
      msg: 'Hey, is the textbook still available?', 
      time: '10:30 AM', 
      unread: 2,
      // Female Student Image
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' 
    },
    { 
      id: 2, 
      name: 'Leo Martinez', 
      msg: 'Perfect! I can meet you at the library.', 
      time: '9:45 AM', 
      unread: 0,
      // Male Student Image
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
    },
    { 
      id: 3, 
      name: 'Sarah Chen', 
      msg: 'Is the price negotiable?', 
      time: 'Yesterday', 
      unread: 0,
      // Female Student Image 2
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80'
    },
  ];
  
  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-3xl mx-auto pt-6 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Messages</h1>
        
        <div className="bg-surface flex items-center px-4 py-3 rounded-xl mb-8 border border-transparent focus-within:border-primary transition">
          <Search className="text-textMuted" size={20} />
          <input type="text" placeholder="Search conversations..." className="ml-3 flex-1 bg-transparent outline-none text-white placeholder-textMuted"/>
        </div>

        <div className="space-y-2">
          {chats.map((chat) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChatListScreen;