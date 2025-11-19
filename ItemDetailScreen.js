import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft, Share, Heart, Star } from 'lucide-react-native';

const ItemDetailScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1">
        {/* Image Header */}
        <View className="relative h-96">
          <Image source={{ uri: 'https://via.placeholder.com/400' }} className="w-full h-full" />
          
          {/* Top Actions */}
          <View className="absolute top-12 left-4 right-4 flex-row justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-black/50 p-2 rounded-full">
              <ArrowLeft color="white" size={24} />
            </TouchableOpacity>
            <View className="flex-row gap-3">
              <TouchableOpacity className="bg-black/50 p-2 rounded-full">
                <Share color="white" size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="bg-black/50 p-2 rounded-full">
                <Heart color="white" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="px-4 py-6">
          <View className="flex-row justify-between items-start">
            <Text className="text-3xl font-bold text-white flex-1 mr-2">Barely Used IKEA Desk Lamp</Text>
            <Text className="text-primary text-2xl font-bold">$15</Text>
          </View>

          <View className="flex-row gap-2 mt-4">
            <View className="bg-green-900 px-3 py-1 rounded-md"><Text className="text-primary">Used - Good</Text></View>
            <View className="bg-surface px-3 py-1 rounded-md"><Text className="text-primary">Furniture</Text></View>
          </View>

          <Text className="text-gray-300 mt-6 leading-6">
            Selling my Forsa desk lamp from IKEA. It's in great condition, just a few minor scuffs...
            <Text className="text-primary font-bold"> Read more</Text>
          </Text>

          {/* Seller Card */}
          <View className="bg-surface p-4 rounded-xl mt-8 flex-row items-center">
            <Image source={{ uri: 'https://via.placeholder.com/50' }} className="w-12 h-12 rounded-full bg-gray-500" />
            <View className="ml-4 flex-1">
              <Text className="text-white font-bold text-lg">Alex Johnson</Text>
              <Text className="text-textMuted">State University</Text>
            </View>
            <View className="flex-row items-center">
              <Star fill="#FACC15" color="#FACC15" size={16} />
              <Text className="text-white font-bold ml-1">4.9</Text>
              <Text className="text-textMuted text-xs ml-1">(82)</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Actions */}
      <View className="px-4 py-6 border-t border-surface flex-row gap-4 pb-10 bg-background">
        <TouchableOpacity className="flex-1 border border-primary py-4 rounded-full items-center">
          <Text className="text-primary font-bold text-lg">Chat with Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-primary py-4 rounded-full items-center">
          <Text className="text-black font-bold text-lg">Make Offer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetailScreen;