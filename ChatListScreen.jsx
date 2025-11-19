import React from 'react';
import { Search } from 'lucide-react';
import BottomNav from './BottomNav';

const ChatListScreen = () => {
  const chats = [
    { id: 1, name: 'Aria Brooks', msg: 'Hey, is the textbook still...', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Leo Martinez', msg: 'Perfect! I can meet you at...', time: '9:45 AM', unread: 0 },
    { id: 3, name: 'Chloe Davis', msg: 'Thanks again for the lamp!', time: 'Yesterday', unread: 0 },
    { id: 4, name: 'Maya Chen', msg: 'Awesome, see you then!', time: 'Mon', unread: 1 },
  ];

  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        <h1 className="text-3xl font-bold mb-4">Chats</h1>
        
        <div className="mb-6">
          <div className="bg-[#13231B] flex items-center px-4 py-3 rounded-lg">
            <Search className="text-[#8E9B93]" size={20} />
            <input 
              type="text"
              placeholder="Search by name or item" 
              className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-[#8E9B93]"
            />
          </div>
        </div>

        <div className="space-y-6">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center cursor-pointer hover:bg-[#13231B] p-2 rounded-lg transition -mx-2">
              <img src="https://via.placeholder.com/50" alt={chat.name} className="w-14 h-14 rounded-full bg-gray-600 object-cover" />
              <div className="flex-1 ml-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-lg">{chat.name}</h4>
                  <span className="text-[#8E9B93] text-xs">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#8E9B93] text-sm truncate max-w-[200px]">{chat.msg}</p>
                  {chat.unread > 0 && (
                    <div className="bg-[#00E359] w-6 h-6 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">{chat.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeTab="chat" />
    </div>
  );
};

export default ChatListScreen;