import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import BottomNav from './BottomNav';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-background pt-12">
      {/* Header */}
      <View className="px-4 flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold text-white">Marketplace</Text>
        <TouchableOpacity 
          className="bg-primary px-4 py-2 rounded-full"
          onPress={() => navigation.navigate('CreateListingScreen')}
        >
          <Text className="font-bold text-black">+ Post Item</Text>
        </TouchableOpacity>
      </View>

      {/* Search & Filter */}
      <View className="px-4 mb-4">
        <View className="bg-surface flex-row items-center px-4 py-3 rounded-lg mb-4">
          <Search color="#8E9B93" size={20} />
          <TextInput 
            placeholder="Search for textbooks, furniture..." 
            placeholderTextColor="#8E9B93"
            className="ml-2 flex-1 text-white"
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
          {['All', 'Books', 'Electronics', 'Furniture'].map((cat, i) => (
            <TouchableOpacity key={i} className={`px-4 py-2 rounded-full ${i===0 ? 'bg-primary' : 'bg-surface'}`}>
              <Text className={`${i===0 ? 'text-black font-bold' : 'text-textMuted'}`}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Grid Content */}
      <ScrollView className="px-4 flex-1">
        <View className="flex-row flex-wrap justify-between pb-20">
          {/* Card Item Example */}
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity 
              key={item} 
              className="w-[48%] mb-6"
              onPress={() => navigation.navigate('ItemDetailScreen')}
            >
              <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-full h-40 rounded-xl mb-2 bg-gray-700" />
              <Text className="text-white font-semibold text-lg">Calculus Textbook</Text>
              <Text className="text-white font-bold text-md">$25.00</Text>
              <Text className="text-primary text-xs mt-1">✔ Verified Student</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomNav activeTab="Home" navigation={navigation} />
    </View>
  );
};

export default HomeScreen;