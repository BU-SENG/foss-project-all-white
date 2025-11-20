import React, { useState } from 'react';
import { ArrowLeft, Send, MoreVertical, Phone } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ChatScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL (e.g., "1" or "2")
  const [message, setMessage] = useState('');

  // This simulates a database of users
  const users = {
    1: { name: 'Aria Brooks', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
    2: { name: 'Leo Martinez', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80' },
    3: { name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80' },
    'new': { name: 'Alex Johnson', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' } // Default for "Chat with Seller"
  };

  // Select the user based on ID, or fallback to Alex if not found
  const currentUser = users[id] || users['new'];
  
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, is the item still available?", sender: 'me', time: '10:30 AM' },
    { id: 2, text: "Yes it is! Are you on campus?", sender: 'them', time: '10:32 AM' },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, { id: Date.now(), text: message, sender: 'me', time: 'Now' }]);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-surface border-b border-white/5 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="hover:bg-white/10 p-2 rounded-full transition">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            {/* DYNAMIC IMAGE AND NAME */}
            <img src={currentUser.image} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-sm md:text-base">{currentUser.name}</h3>
              <p className="text-primary text-xs">Online</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-primary">
          <Phone size={20} className="cursor-pointer hover:text-white transition" />
          <MoreVertical size={20} className="cursor-pointer hover:text-white transition" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 md:pb-28">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[75%] md:max-w-[60%] px-4 py-3 rounded-2xl text-sm md:text-base ${
                msg.sender === 'me' 
                  ? 'bg-primary text-black rounded-tr-none' 
                  : 'bg-surface text-white rounded-tl-none'
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-black/60' : 'text-textMuted'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/5 p-4 pb-6 md:pb-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..." 
            className="flex-1 bg-background text-white p-3 rounded-full outline-none border border-transparent focus:border-primary transition"
          />
          <button 
            onClick={handleSend}
            className="bg-primary p-3 rounded-full hover:bg-green-400 transition transform hover:scale-105"
          >
            <Send size={20} className="text-black ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;