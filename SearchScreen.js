import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft, Search } from 'lucide-react-native';
import BottomNav from './BottomNav';

const SearchScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-background pt-12">
      {/* Header */}
      <View className="px-4 flex-row items-center mb-4 gap-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Search Marketplace</Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 mb-4">
        <View className="bg-surface flex-row items-center px-4 py-3 rounded-lg mb-4">
          <Search color="#00E359" size={20} />
          <TextInput 
            placeholder="Search for textbooks, furniture..." 
            placeholderTextColor="#8E9B93"
            className="ml-2 flex-1 text-white"
          />
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity className="bg-primary px-6 py-2 rounded-full">
            <Text className="text-black font-bold">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-surface px-4 py-2 rounded-full">
            <Text className="text-textMuted">Textbooks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-surface px-4 py-2 rounded-full">
            <Text className="text-textMuted">Electronics</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="px-4 text-lg font-bold text-white mb-4">Trending on Campus</Text>

      {/* Grid */}
      <ScrollView className="px-4 flex-1">
        <View className="flex-row flex-wrap justify-between pb-20">
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} className="w-[48%] mb-6">
              <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-full h-40 rounded-xl mb-2 bg-white" />
              <View className="flex-row justify-between items-start">
                <Text className="text-white font-semibold flex-1">Ergonomic Chair</Text>
                <Image source={{ uri: 'https://via.placeholder.com/30' }} className="w-6 h-6 rounded-full ml-2" />
              </View>
              <Text className="text-textMuted text-sm">$75</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNav activeTab="Search" navigation={navigation} />
    </View>
  );
};

export default SearchScreen;