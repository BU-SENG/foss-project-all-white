import React from 'react';
import { Search, MoreVertical, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const MyListingsScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4 relative min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Listings</h1>
          <Search className="text-white" size={24} />
        </div>
        <div className="bg-surface p-3 rounded-xl mb-4 flex items-center">
           <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" className="w-20 h-20 rounded-lg object-cover" />
           <div className="flex-1 ml-4">
             <h3 className="text-white font-bold text-lg">Nike Air Max</h3>
             <p className="text-primary font-bold mt-1">$75.00</p>
             <span className="text-primary text-xs bg-secondary px-2 py-1 rounded-full mt-2 inline-block">Active</span>
           </div>
           <MoreVertical className="text-textMuted" size={20} />
        </div>
        <button onClick={() => navigate('/create')} className="fixed bottom-24 right-6 bg-primary flex items-center px-6 py-3 rounded-full shadow-lg text-black font-bold cursor-pointer hover:scale-105 transition">
          <Plus size={24} className="mr-2"/> Add Listing
        </button>
      </div>
      <BottomNav />
    </div>
  );
};
export default MyListingsScreen;