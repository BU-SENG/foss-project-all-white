import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import BottomNav from './BottomNav';

const ChatListScreen = ({ navigation }) => {
  const chats = [
    { id: 1, name: 'Aria Brooks', msg: 'Hey, is the textbook still...', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Leo Martinez', msg: 'Perfect! I can meet you at...', time: '9:45 AM', unread: 0 },
    { id: 3, name: 'Chloe Davis', msg: 'Thanks again for the lamp!', time: 'Yesterday', unread: 0 },
    { id: 4, name: 'Maya Chen', msg: 'Awesome, see you then!', time: 'Mon', unread: 1 },
  ];

  return (
    <View className="flex-1 bg-background pt-12">
      <Text className="px-4 text-3xl font-bold text-white mb-4">Chats</Text>
      
      <View className="px-4 mb-6">
        <View className="bg-surface flex-row items-center px-4 py-3 rounded-lg">
          <Search color="#8E9B93" size={20} />
          <TextInput 
            placeholder="Search by name or item" 
            placeholderTextColor="#8E9B93"
            className="ml-2 flex-1 text-white"
          />
        </View>
      </View>

      <View className="flex-1 px-4">
        {chats.map((chat) => (
          <TouchableOpacity key={chat.id} className="flex-row items-center mb-6">
            <Image source={{ uri: 'https://via.placeholder.com/50' }} className="w-14 h-14 rounded-full bg-gray-600" />
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between mb-1">
                <Text className="text-white font-bold text-lg">{chat.name}</Text>
                <Text className="text-textMuted text-xs">{chat.time}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-textMuted truncate">{chat.msg}</Text>
                {chat.unread > 0 && (
                  <View className="bg-primary w-6 h-6 rounded-full items-center justify-center">
                    <Text className="text-black text-xs font-bold">{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <BottomNav activeTab="Chat" navigation={navigation} />
    </View>
  );
};

export default ChatListScreen;