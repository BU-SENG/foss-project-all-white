import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

const ChatScreen = () => {
  const { chatId } = useParams();
  const { user } = useAuthStore();
  const [messages, setMessages] = useState(() => {
    const senderId = user?.id || '1';
    return [
      { id: 1, text: 'Hello! Is this still available?', sender: '2', timestamp: new Date() },
      { id: 2, text: 'Yes, it is!', sender: senderId, timestamp: new Date() },
      { id: 3, text: 'Great! When can I pick it up?', sender: '2', timestamp: new Date() },
    ];
  });
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const chatData = {
    id: chatId,
    otherUser: { name: 'Alice Johnson', id: '2' },
    item: { title: 'Textbook', price: 25, id: '1' }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: user?.id || '1',
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <h2>{chatData.otherUser.name}</h2>
        <p>Regarding: {chatData.item.title} - ${chatData.item.price}</p>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === user?.id ? 'sent' : 'received'}`}
          >
            <div className="message-bubble">
              <p>{message.text}</p>
              <span className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="message-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen; // Make sure this line exists