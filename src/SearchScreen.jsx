import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const SearchScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        <div className="flex items-center mb-4 gap-4">
          <button onClick={() => navigate(-1)}><ArrowLeft className="text-white" size={24} /></button>
          <h1 className="text-xl font-bold">Search Marketplace</h1>
        </div>
        <div className="mb-6">
          <div className="bg-surface flex items-center px-4 py-3 rounded-lg mb-4">
            <Search className="text-primary" size={20} />
            <input type="text" placeholder="Search..." className="ml-3 flex-1 bg-transparent outline-none text-white placeholder-textMuted"/>
          </div>
          <div className="flex gap-2">
             <button className="bg-primary px-6 py-2 rounded-full text-black font-bold text-sm">All</button>
             <button className="bg-surface px-4 py-2 rounded-full text-textMuted text-sm">Textbooks</button>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-4">Trending on Campus</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="cursor-pointer">
              <img src={`https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=400&q=80`} className="w-full h-40 rounded-xl mb-2 object-cover" />
              <h3 className="text-white font-semibold text-sm">Ergonomic Chair</h3>
              <p className="text-textMuted text-xs mt-1">$75</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default SearchScreen;