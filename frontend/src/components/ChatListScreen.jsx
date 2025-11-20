import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import { MessageCircle, Search, Clock } from 'lucide-react';

const ChatListScreen = () => {
  const { user } = useAuthStore();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // TODO: Replace with actual API call
        // const res = await api.get('/chats');
        // setChats(res.data);
        
        // Mock data for now
        setChats([
          {
            id: '1',
            otherUser: { name: 'Alice Johnson', id: '2' },
            lastMessage: 'Is this still available?',
            timestamp: new Date(),
            item: { title: 'Calculus Textbook', id: '1', price: 45 },
            unread: 2
          },
          {
            id: '2',
            otherUser: { name: 'Bob Smith', id: '3' },
            lastMessage: 'Can you do $20?',
            timestamp: new Date(Date.now() - 3600000),
            item: { title: 'Office Chair', id: '2', price: 75 },
            unread: 0
          }
        ]);
      } catch (error) {
        console.error('Error fetching chats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchChats();
    }
  }, [user]);

  const filteredChats = chats.filter(chat =>
    chat.otherUser.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center pt-16">
        <div className="rounded-lg h-12 w-12 border-4 border-gray-700 border-t-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 pb-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Messages</h1>
            <p className="text-gray-400 mt-2">Chat with buyers and sellers</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search conversations..."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {filteredChats.length === 0 ? (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No messages yet</h3>
            <p className="text-gray-400">Your conversations will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChats.map((chat) => (
              <Link 
                key={chat.id} 
                to={`/chat/${chat.id}`}
                className="block bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {chat.otherUser.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg truncate">{chat.otherUser.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{chat.timestamp.toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1 truncate">
                      Regarding: <span className="text-white font-medium">{chat.item.title}</span> - ${chat.item.price}
                    </p>
                    <p className="text-gray-300 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-blue-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatListScreen;