import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- IMPORTING LOCAL IMAGES ---
import broomImg from './assets/images/broom.jpeg';
import ironImg from './assets/images/iron.jpeg';
import plateImg from './assets/images/disposable-plate.jpeg';
import mopImg from './assets/images/mop.jpeg';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      title: "Calculus Textbook",
      price: "₦5,000",
      category: "Books",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
      time: "2h ago"
    },
    {
      id: 2,
      title: "Reusable Plastic Cup",
      price: "₦500",
      category: "Dorm Essentials",
      image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=400&q=80",
      time: "4h ago"
    },
    {
      id: 3,
      title: "Local Broom (Igbale)",
      price: "₦800",
      category: "Dorm Essentials",
      image: broomImg,
      time: "5h ago"
    },
    {
      id: 4,
      title: "Cleaning Mop",
      price: "₦2,500",
      category: "Dorm Essentials",
      image: mopImg,
      time: "1d ago"
    },
    {
      id: 5,
      title: "Physics Textbook",
      price: "₦4,500",
      category: "Books",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=400&q=80",
      time: "1d ago"
    },
    {
      id: 6,
      title: "60 Leaves Exercise Book",
      price: "₦300",
      category: "Books",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80",
      time: "2d ago"
    },
    {
      id: 7,
      title: "Disposable Plates (Pack)",
      price: "₦1,500",
      category: "Dorm Essentials",
      image: plateImg,
      time: "3d ago"
    },
    {
      id: 8,
      title: "Electric Iron",
      price: "₦8,000",
      category: "Electronics",
      image: ironImg,
      time: "3d ago"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Books', 'Electronics', 'Furniture', 'Clothing', 'Sports', 'Dorm Essentials', 'Others'];

  return (
    <div className="min-h-screen bg-background text-white pb-24 font-sans">
      <div className="max-w-7xl mx-auto pt-6 px-4 md:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Campus Marketplace</h1>
        </div>

        <div className="mb-8">
          <div className="bg-surface flex items-center px-4 py-3 rounded-lg mb-4 w-full md:max-w-2xl border border-transparent focus-within:border-primary transition">
            <Search className="text-textMuted" size={20} />
            <input 
              type="text" 
              placeholder="Search for textbooks, furniture..." 
              className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-textMuted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} onClick={() => navigate('/item/1')} className="cursor-pointer group bg-surface p-3 rounded-2xl hover:bg-secondary transition duration-300">
                <div className="w-full h-40 md:h-56 rounded-xl mb-3 bg-gray-700 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm">
                      <p className="text-primary text-xs font-bold">Active</p>
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
            // --- CHANGED THIS MESSAGE ---
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