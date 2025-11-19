import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const SearchScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        {/* Header */}
        <div className="flex items-center mb-4 gap-4">
          <button onClick={() => navigate(-1)} className="hover:bg-white/10 p-2 rounded-full">
            <ArrowLeft className="text-white" size={24} />
          </button>
          <h1 className="text-xl font-bold">Search Marketplace</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="bg-[#13231B] flex items-center px-4 py-3 rounded-lg mb-4">
            <Search className="text-[#00E359]" size={20} />
            <input 
              type="text"
              placeholder="Search for textbooks, furniture..." 
              className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-[#8E9B93]"
            />
          </div>
          <div className="flex gap-2">
            <button className="bg-[#00E359] px-6 py-2 rounded-full text-black font-bold text-sm">All</button>
            <button className="bg-[#13231B] px-4 py-2 rounded-full text-[#8E9B93] text-sm hover:bg-[#1a3025]">Textbooks</button>
            <button className="bg-[#13231B] px-4 py-2 rounded-full text-[#8E9B93] text-sm hover:bg-[#1a3025]">Electronics</button>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">Trending on Campus</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="cursor-pointer group">
              <div className="w-full h-40 rounded-xl mb-2 bg-white overflow-hidden">
                <img src={`https://via.placeholder.com/150?text=Item+${item}`} alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-white font-semibold text-sm flex-1">Ergonomic Chair</h3>
                <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full ml-2 border border-black" />
              </div>
              <p className="text-[#8E9B93] text-xs mt-1">$75</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav activeTab="search" />
    </div>
  );
};

export default SearchScreen;