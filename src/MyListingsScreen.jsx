import React from 'react';
import { Search, MoreVertical, Plus, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- IMPORTING LOCAL IMAGE ---
// CORRECTED: Changed .jpeg to .jpg
import chemBookImg from './assets/images/chemistry-textbook.jpg';

const MyListingsScreen = () => {
  const navigate = useNavigate();

  const listings = [
    { 
      id: 1, 
      title: 'Nike Air Max 270', 
      price: '₦75,000', 
      status: 'Active', 
      color: 'bg-green-900/30 text-primary border-green-500/30',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80'
    },
    { 
      id: 2, 
      title: 'Chemistry Textbook', 
      price: '₦15,000', 
      status: 'Sold', 
      color: 'bg-gray-700/30 text-gray-400 border-gray-600/30',
      image: chemBookImg // Using the local image variable here
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8 relative min-h-screen md:min-h-0">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">My Listings</h1>
          <div className="bg-surface p-2 rounded-full md:hidden">
            <Search className="text-white" size={24} />
          </div>
          <button onClick={() => navigate('/create')} className="hidden md:flex items-center bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
            <Plus size={20} className="mr-2"/> Add New
          </button>
        </div>

        {/* Desktop: Grid, Mobile: Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* "Add New" Card (Desktop Only visual helper) */}
            <div onClick={() => navigate('/create')} className="hidden md:flex flex-col items-center justify-center border-2 border-dashed border-surface hover:border-primary rounded-2xl p-8 cursor-pointer transition group h-40">
                <div className="bg-surface p-3 rounded-full mb-2 group-hover:bg-primary group-hover:text-black transition">
                    <Plus size={24} />
                </div>
                <p className="font-bold text-textMuted group-hover:text-white transition">Create New Listing</p>
            </div>

            {/* Listing Items */}
            {listings.map((item) => (
                <div key={item.id} className="bg-surface p-4 rounded-2xl flex items-center hover:bg-secondary transition cursor-pointer group border border-transparent hover:border-surface/50">
                    <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt={item.title} />
                    <div className="flex-1 ml-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-white font-bold text-lg group-hover:text-primary transition">{item.title}</h3>
                            <button className="p-1 hover:bg-white/10 rounded-full"><MoreVertical className="text-textMuted" size={20} /></button>
                        </div>
                        <p className="text-white font-bold text-xl mt-1">{item.price}</p>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full mt-2 border ${item.color}`}>
                            <Tag size={12} className="mr-2" />
                            <span className="text-xs font-bold uppercase tracking-wide">{item.status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Floating Action Button (Mobile Only) */}
        <button onClick={() => navigate('/create')} className="md:hidden fixed bottom-24 right-6 bg-primary flex items-center px-6 py-4 rounded-full shadow-lg text-black font-bold cursor-pointer hover:scale-105 transition z-50">
          <Plus size={24} className="mr-2"/> Add Listing
        </button>
      </div>
    </div>
  );
};
export default MyListingsScreen;