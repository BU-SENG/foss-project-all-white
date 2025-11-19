import React from 'react';
import { Search } from 'lucide-react';
import BottomNav from './BottomNav';

const ChatListScreen = () => {
  const chats = [
    { id: 1, name: 'Aria Brooks', msg: 'Hey, is the textbook still...', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Leo Martinez', msg: 'Perfect! I can meet you at...', time: '9:45 AM', unread: 0 },
  ];
  return (
    <div className="min-h-screen bg-background text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        <h1 className="text-3xl font-bold mb-4">Chats</h1>
        <div className="bg-surface flex items-center px-4 py-3 rounded-lg mb-6">
          <Search className="text-textMuted" size={20} />
          <input type="text" placeholder="Search..." className="ml-3 flex-1 bg-transparent outline-none text-white"/>
        </div>
        <div className="space-y-6">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center cursor-pointer hover:bg-surface p-2 rounded-lg transition">
              <img src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80`} className="w-14 h-14 rounded-full object-cover" />
              <div className="flex-1 ml-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-lg">{chat.name}</h4>
                  <span className="text-textMuted text-xs">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-textMuted text-sm truncate">{chat.msg}</p>
                  {chat.unread > 0 && <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold">{chat.unread}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default ChatListScreen;