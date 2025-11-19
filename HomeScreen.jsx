import React from 'react';
import { Search } from 'lucide-react';
import BottomNav from './BottomNav';

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24 font-sans">
      <div className="max-w-md mx-auto pt-6 px-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <button className="bg-[#00E359] hover:bg-[#00c94d] px-4 py-2 rounded-full font-bold text-black text-sm transition">
            + Post Item
          </button>
        </div>

        {/* Search & Filter */}
        <div className="mb-6">
          <div className="bg-[#13231B] flex items-center px-4 py-3 rounded-lg mb-4">
            <Search className="text-[#8E9B93]" size={20} />
            <input 
              type="text"
              placeholder="Search for textbooks, furniture..." 
              className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-[#8E9B93]"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Books', 'Electronics', 'Furniture'].map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${i===0 ? 'bg-[#00E359] text-black font-bold' : 'bg-[#13231B] text-[#8E9B93]'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="cursor-pointer group">
              <div className="w-full h-40 rounded-xl mb-2 bg-gray-700 overflow-hidden">
                <img src={`https://via.placeholder.com/300?text=Item+${item}`} alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight">Calculus Textbook</h3>
              <p className="text-white font-bold text-md">$25.00</p>
              <p className="text-[#00E359] text-xs mt-1">✔ Verified Student</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
};

export default HomeScreen;