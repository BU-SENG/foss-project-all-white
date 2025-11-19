import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { X, Image as ImageIcon, ChevronDown } from 'lucide-react-native';

const CreateListingScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-background pt-12">
      <View className="px-4 flex-row justify-between items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">List Your Item</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="px-4">
        {/* Image Upload Area */}
        <View className="border-2 border-dashed border-surface rounded-2xl h-48 items-center justify-center mb-8">
          <Text className="text-white font-bold text-lg mb-1">Add Photos</Text>
          <Text className="text-textMuted mb-4">Add up to 5 photos</Text>
          <TouchableOpacity className="bg-surface px-4 py-2 rounded-lg flex-row items-center border border-gray-700">
            <ImageIcon color="white" size={18} className="mr-2" />
            <Text className="text-white font-bold ml-2">Upload Images</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <Text className="text-white mb-2 font-semibold">Title</Text>
        <TextInput 
          className="bg-surface text-white p-4 rounded-xl mb-6 border border-gray-800"
          placeholder="e.g., Mini Fridge, barely used"
          placeholderTextColor="#555"
        />

        <Text className="text-white mb-2 font-semibold">Description</Text>
        <TextInput 
          className="bg-surface text-white p-4 rounded-xl mb-6 h-32 border border-gray-800"
          placeholder="Describe your item, its condition, etc."
          placeholderTextColor="#555"
          multiline
          textAlignVertical="top"
        />

        <View className="flex-row gap-4 mb-20">
          <View className="flex-1">
            <Text className="text-white mb-2 font-semibold">Price</Text>
            <View className="bg-surface rounded-xl border border-gray-800 p-4">
              <Text className="text-white">$ 0.00</Text>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-white mb-2 font-semibold">Category</Text>
            <View className="bg-surface rounded-xl border border-gray-800 p-4 flex-row justify-between items-center">
              <Text className="text-white">Select...</Text>
              <ChevronDown color="#8E9B93" size={20} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Custom Footer for Post */}
      <BottomNav activeTab="Post" navigation={navigation} /> 
      {/* Note: In the design, the 'Post' is a big green button in center of nav. 
          The BottomNav component above handles this logic via the 'highlight' prop. */}
    </View>
  );
};

export default CreateListingScreen;