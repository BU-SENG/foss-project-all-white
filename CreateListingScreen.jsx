import React from 'react';
import { X, Image as ImageIcon, ChevronDown } from 'lucide-react';
import BottomNav from './BottomNav';

const CreateListingScreen = () => {
  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        
        <div className="flex justify-between items-center mb-6">
          <button className="hover:bg-white/10 p-1 rounded-full"><X size={24} /></button>
          <h1 className="text-xl font-bold">List Your Item</h1>
          <div className="w-6" />
        </div>

        <div className="space-y-6">
          {/* Image Upload */}
          <div className="border-2 border-dashed border-[#13231B] hover:border-[#00E359] rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer transition bg-[#0B1410]">
            <p className="font-bold text-lg mb-1">Add Photos</p>
            <p className="text-[#8E9B93] mb-4 text-sm">Add up to 5 photos</p>
            <button className="bg-[#13231B] px-4 py-2 rounded-lg flex items-center border border-gray-700 hover:bg-[#1a3025]">
              <ImageIcon size={18} className="mr-2" />
              <span className="font-bold">Upload Images</span>
            </button>
          </div>

          {/* Form Fields */}
          <div>
            <label className="block mb-2 font-semibold">Title</label>
            <input 
              type="text"
              className="w-full bg-[#13231B] text-white p-4 rounded-xl border border-gray-800 focus:border-[#00E359] outline-none"
              placeholder="e.g., Mini Fridge, barely used"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Description</label>
            <textarea 
              className="w-full bg-[#13231B] text-white p-4 rounded-xl h-32 border border-gray-800 focus:border-[#00E359] outline-none resize-none"
              placeholder="Describe your item, its condition, etc."
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Price</label>
              <div className="bg-[#13231B] rounded-xl border border-gray-800 p-4 flex items-center">
                <span className="text-[#8E9B93] mr-2">$</span>
                <input type="number" className="bg-transparent text-white w-full outline-none" placeholder="0.00" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Category</label>
              <button className="w-full bg-[#13231B] rounded-xl border border-gray-800 p-4 flex justify-between items-center text-left hover:border-[#00E359]">
                <span>Select...</span>
                <ChevronDown className="text-[#8E9B93]" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNav activeTab="post" />
    </div>
  );
};

export default CreateListingScreen;