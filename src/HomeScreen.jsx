import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24 font-sans">
      <div className="max-w-md mx-auto pt-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <button onClick={() => navigate('/create')} className="bg-primary hover:bg-green-400 px-4 py-2 rounded-full font-bold text-black text-sm transition">
            + Post Item
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-surface flex items-center px-4 py-3 rounded-lg mb-4">
            <Search className="text-textMuted" size={20} />
            <input type="text" placeholder="Search for textbooks, furniture..." className="ml-3 flex-1 bg-transparent border-none outline-none text-white placeholder-textMuted"/>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Books', 'Electronics', 'Furniture'].map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i===0 ? 'bg-primary text-black font-bold' : 'bg-surface text-textMuted'}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} onClick={() => navigate('/item/1')} className="cursor-pointer group">
              <div className="w-full h-40 rounded-xl mb-2 bg-gray-700 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80`} alt="Item" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight">Calculus Textbook</h3>
              <p className="text-white font-bold text-md">$25.00</p>
              <p className="text-primary text-xs mt-1">✔ Verified Student</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomeScreen;