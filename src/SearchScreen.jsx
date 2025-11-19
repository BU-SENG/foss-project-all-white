import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto pt-6 px-4 md:px-8">
        
        {/* Header */}
        <div className="flex items-center mb-6 gap-4">
          <button onClick={() => navigate(-1)} className="md:hidden hover:bg-white/10 p-2 rounded-full">
            <ArrowLeft className="text-white" size={24} />
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">Search Marketplace</h1>
        </div>

        {/* Search Bar & Filters */}
        <div className="mb-8 max-w-3xl">
          <div className="bg-surface flex items-center px-4 py-4 rounded-xl mb-6 border border-transparent focus-within:border-primary transition">
            <Search className="text-primary" size={24} />
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="ml-4 flex-1 bg-transparent outline-none text-white placeholder-textMuted text-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
             <button className="bg-primary px-6 py-2 rounded-full text-black font-bold text-sm hover:scale-105 transition">All</button>
             <button className="bg-surface px-6 py-2 rounded-full text-textMuted text-sm border border-surface hover:border-textMuted transition">Textbooks</button>
             <button className="bg-surface px-6 py-2 rounded-full text-textMuted text-sm border border-surface hover:border-textMuted transition">Electronics</button>
             <button className="bg-surface px-6 py-2 rounded-full text-textMuted text-sm border border-surface hover:border-textMuted transition">Furniture</button>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Trending on Campus</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="cursor-pointer group bg-surface p-3 rounded-2xl hover:bg-secondary transition">
              <div className="overflow-hidden rounded-xl mb-3">
                <img src={`https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=400&q=80`} className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-white font-semibold text-md md:text-lg">Ergonomic Chair</h3>
              <p className="text-primary font-bold mt-1">$75</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchScreen;