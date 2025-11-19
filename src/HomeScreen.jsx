import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24 font-sans">
      {/* Container: spreads to 7xl on desktop, centers automatically */}
      <div className="max-w-7xl mx-auto pt-6 px-4 md:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Marketplace</h1>
          {/* Hidden on desktop because we have the button in the navbar now */}
          <button onClick={() => navigate('/create')} className="md:hidden bg-primary hover:bg-green-400 px-4 py-2 rounded-full font-bold text-black text-sm transition">
            + Post Item
          </button>
        </div>

        <div className="mb-8">
          <div className="bg-surface flex items-center px-4 py-3 rounded-lg mb-4 w-full md:max-w-2xl border border-transparent focus-within:border-primary transition">
            <Search className="text-textMuted" size={20} />
            <input type="text" placeholder="Search for textbooks, furniture..." className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-textMuted"/>
          </div>
          
          {/* Categories: Scrollable on mobile, standard row on desktop */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Books', 'Electronics', 'Furniture', 'Clothing', 'Sports', 'Dorm Essentials'].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition hover:bg-opacity-80 ${i===0 ? 'bg-primary text-black font-bold' : 'bg-surface text-textMuted hover:bg-secondary hover:text-primary'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} onClick={() => navigate('/item/1')} className="cursor-pointer group bg-surface p-3 rounded-2xl hover:bg-secondary transition duration-300">
              <div className="w-full h-40 md:h-56 rounded-xl mb-3 bg-gray-700 overflow-hidden relative">
                <img src={`https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80`} alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm">
                    <p className="text-primary text-xs font-bold">Active</p>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition">Calculus Textbook</h3>
              <div className="flex justify-between items-center">
                <p className="text-white font-bold text-xl">$25.00</p>
                <p className="text-textMuted text-xs">2h ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;