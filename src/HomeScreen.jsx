import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from './ProductContext'; // using Global State

const HomeScreen = () => {
  const navigate = useNavigate();
  const { products } = useProducts(); // Get all products from the "Cloud"
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // --- THE FILTER LOGIC ---
  const filteredProducts = products.filter(product => {
    // 1. Check Category
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    // 2. Check Search Text (Case Insensitive)
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    // 3. Check Status (Active vs Sold) - Allows hiding Sold items
    const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;

    return matchesCategory && matchesSearch && matchesStatus;
  });

  const categories = ['All', 'Books', 'Electronics', 'Furniture', 'Clothing', 'Sports', 'Dorm Essentials', 'Others'];

  return (
    <div className="min-h-screen bg-background text-white pb-24 font-sans">
      <div className="max-w-7xl mx-auto pt-6 px-4 md:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Campus Marketplace</h1>
        </div>

        <div className="mb-8 space-y-4">
          {/* Search & Status Filter Row */}
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Bar */}
            <div className="bg-surface flex items-center px-4 py-3 rounded-lg flex-1 border border-transparent focus-within:border-primary transition">
              <Search className="text-textMuted" size={20} />
              <input 
                type="text" 
                placeholder="Search for textbooks, furniture..." 
                className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-textMuted"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative w-full md:w-48">
                <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full bg-surface text-white p-3 pl-4 pr-10 rounded-lg border border-transparent focus:border-primary outline-none appearance-none cursor-pointer font-medium"
                >
                    <option value="All">Any Status</option>
                    <option value="Active">Active Only</option>
                    <option value="Sold">Sold Items</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-textMuted pointer-events-none" size={20} />
            </div>
          </div>
          
          {/* Categories Scroll */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery('');
                }} 
                className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition hover:bg-opacity-80 ${
                  selectedCategory === cat 
                    ? 'bg-primary text-black font-bold' 
                    : 'bg-surface text-textMuted hover:bg-secondary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/item/${item.id}`)} 
                className={`cursor-pointer group bg-surface p-3 rounded-2xl hover:bg-secondary transition duration-300 ${item.status === 'Sold' ? 'opacity-70' : ''}`}
              >
                <div className="w-full h-40 md:h-56 rounded-xl mb-3 bg-gray-700 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-md backdrop-blur-sm ${
                    item.status === 'Active' ? 'bg-black/60 text-primary' : 'bg-gray-800/90 text-gray-400'
                  }`}>
                      <p className="text-xs font-bold">{item.status}</p>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition truncate">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-white font-bold text-xl">{item.price}</p>
                  <p className="text-textMuted text-xs">{item.time}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-textMuted">
              <p className="text-lg">No items found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;