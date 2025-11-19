import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, Search, PlusCircle, MessageSquare, User } from 'lucide-react-native'; // Or your icon library

const BottomNav = ({ activeTab, navigation }) => {
  const tabs = [
    { name: 'Home', icon: Home, screen: 'HomeScreen' },
    { name: 'Search', icon: Search, screen: 'SearchScreen' },
    { name: 'Post', icon: PlusCircle, screen: 'CreateListingScreen', highlight: true },
    { name: 'Chat', icon: MessageSquare, screen: 'ChatListScreen' },
    { name: 'Profile', icon: User, screen: 'ProfileScreen' },
  ];

  return (
    <View className="flex-row justify-between items-center bg-background border-t border-surface px-6 py-4">
      {tabs.map((tab, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => navigation.navigate(tab.screen)}
          className="items-center"
        >
          {tab.highlight ? (
            <View className="bg-primary p-3 rounded-full -mt-8 shadow-lg">
              <tab.icon size={24} color="#000" />
              <Text className="text-[10px] font-bold text-black mt-1">{tab.name}</Text>
            </View>
          ) : (
            <>
              <tab.icon size={24} color={activeTab === tab.name ? '#00E359' : '#8E9B93'} />
              <Text className={`text-[10px] mt-1 ${activeTab === tab.name ? 'text-primary' : 'text-textMuted'}`}>
                {tab.name}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;