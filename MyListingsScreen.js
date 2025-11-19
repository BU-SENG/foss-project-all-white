import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Search, MoreVertical, Plus } from 'lucide-react-native';
import BottomNav from './BottomNav';

const MyListingsScreen = ({ navigation }) => {
  const listings = [
    { id: 1, title: 'Nike Air Max 270', price: '$75.00', status: 'Active', color: 'text-primary', bg: 'bg-green-900' },
    { id: 2, title: 'Chemistry Textbook', price: '$40.00', status: 'Sold', color: 'text-gray-300', bg: 'bg-surface' },
  ];

  return (
    <View className="flex-1 bg-background pt-12">
      <View className="px-4 flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-white">My Listings</Text>
        <Search color="white" size={24} />
      </View>

      <View className="px-4 flex-1">
        {listings.map((item) => (
          <View key={item.id} className="bg-surface p-3 rounded-xl mb-4 flex-row items-center">
            <Image source={{ uri: 'https://via.placeholder.com/80' }} className="w-20 h-20 rounded-lg bg-gray-600" />
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between">
                <Text className="text-white font-bold text-lg">{item.title}</Text>
                <MoreVertical color="#8E9B93" size={20} />
              </View>
              <Text className="text-primary font-bold mt-1">{item.price}</Text>
              <View className={`self-start px-3 py-1 rounded-full mt-2 ${item.bg}`}>
                <Text className={`${item.color} text-xs font-bold`}>{item.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-24 right-4 bg-primary flex-row items-center px-6 py-3 rounded-full shadow-lg"
        onPress={() => navigation.navigate('CreateListingScreen')}
      >
        <Plus color="black" size={24} />
        <Text className="text-black font-bold ml-2 text-lg">Add Listing</Text>
      </TouchableOpacity>

      <BottomNav activeTab="Profile" navigation={navigation} />
    </View>
  );
};

export default MyListingsScreen;