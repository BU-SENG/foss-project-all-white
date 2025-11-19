import React from 'react';
import { ArrowLeft, Share, Heart, Star } from 'lucide-react';

const ItemDetailScreen = () => {
  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24">
      <div className="max-w-md mx-auto relative">
        
        {/* Image Header */}
        <div className="relative h-96 bg-gray-800">
          <img src="https://via.placeholder.com/600x800" alt="Lamp" className="w-full h-full object-cover" />
          
          {/* Top Actions Overlay */}
          <div className="absolute top-6 left-4 right-4 flex justify-between z-10">
            <button className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
              <ArrowLeft className="text-white" size={24} />
            </button>
            <div className="flex gap-3">
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                <Share className="text-white" size={24} />
              </button>
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                <Heart className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-white flex-1 mr-4">Barely Used IKEA Desk Lamp</h1>
            <span className="text-[#00E359] text-2xl font-bold">$15</span>
          </div>

          <div className="flex gap-2 mt-4">
            <span className="bg-[#1F3328] text-[#00E359] px-3 py-1 rounded-md text-sm font-semibold">Used - Good</span>
            <span className="bg-[#13231B] text-[#00E359] px-3 py-1 rounded-md text-sm font-semibold">Furniture</span>
          </div>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Selling my Forsa desk lamp from IKEA. It's in great condition, just a few minor scuffs that are barely noticeable. Provides excellent directed light for reading or studying.
            <button className="text-[#00E359] font-bold ml-1 hover:underline">Read more</button>
          </p>

          {/* Seller Card */}
          <div className="bg-[#13231B] p-4 rounded-xl mt-8 flex items-center cursor-pointer hover:bg-[#1a3025] transition">
            <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full bg-gray-500 object-cover" />
            <div className="ml-4 flex-1">
              <h4 className="text-white font-bold text-lg">Alex Johnson</h4>
              <p className="text-[#8E9B93] text-sm">State University</p>
            </div>
            <div className="flex items-center">
              <Star fill="#FACC15" color="#FACC15" size={16} />
              <span className="text-white font-bold ml-1">4.9</span>
              <span className="text-[#8E9B93] text-xs ml-1">(82)</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0B1410] border-t border-[#13231B] p-4 z-50">
          <div className="max-w-md mx-auto flex gap-4">
            <button className="flex-1 border border-[#00E359] py-3 rounded-full text-[#00E359] font-bold text-lg hover:bg-[#00E359]/10 transition">
              Chat with Seller
            </button>
            <button className="flex-1 bg-[#00E359] py-3 rounded-full text-black font-bold text-lg hover:bg-[#00c94d] transition">
              Make Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailScreen;