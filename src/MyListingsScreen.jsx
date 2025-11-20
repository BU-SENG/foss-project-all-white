import React, { useState } from 'react';
import { Search, MoreVertical, Plus, Tag, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import chemBookImg from './assets/images/chemistry-textbook.jpg';
import { products } from './data'; // Import shared data
import { useSavedItems } from './SavedContext'; // Import saved logic

const MyListingsScreen = () => {
  const navigate = useNavigate();
  const { savedIds } = useSavedItems(); // Get list of saved IDs
  const [activeTab, setActiveTab] = useState('listings'); // 'listings' or 'saved'

  // Filter products to find the ones that are saved
  const savedProducts = products.filter(item => savedIds.includes(item.id));

  // Hardcoded "My Listings" (Items I am selling)
  const myListings = [
    { id: 101, title: 'Nike Air Max 270', price: '₦75,000', status: 'Active', color: 'bg-green-900/30 text-primary border-green-500/30', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80' },
    { id: 102, title: 'Chemistry Textbook', price: '₦15,000', status: 'Sold', color: 'bg-gray-700/30 text-gray-400 border-gray-600/30', image: chemBookImg },
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8 relative min-h-screen md:min-h-0">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Profile</h1>
          <button onClick={() => navigate('/create')} className="hidden md:flex items-center bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
            <Plus size={20} className="mr-2"/> Add New
          </button>
        </div>

        {/* --- TABS --- */}
        <div className="flex gap-6 border-b border-surface mb-6">
          <button 
            onClick={() => setActiveTab('listings')}
            className={`pb-2 text-lg font-bold transition ${activeTab === 'listings' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}
          >
            My Listings
          </button>
          <button 
            onClick={() => setActiveTab('saved')}
            className={`pb-2 text-lg font-bold transition ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}
          >
            Saved Items
          </button>
        </div>

        {/* --- CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* VIEW 1: MY LISTINGS */}
            {activeTab === 'listings' && myListings.map((item) => (
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

            {/* VIEW 2: SAVED ITEMS */}
            {activeTab === 'saved' && (
              savedProducts.length > 0 ? (
                savedProducts.map((item) => (
                  <div key={item.id} onClick={() => navigate(`/item/${item.id}`)} className="bg-surface p-4 rounded-2xl flex items-center hover:bg-secondary transition cursor-pointer group border border-transparent hover:border-surface/50">
                      <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt={item.title} />
                      <div className="flex-1 ml-4">
                          <div className="flex justify-between items-start">
                              <h3 className="text-white font-bold text-lg group-hover:text-primary transition">{item.title}</h3>
                              <Heart className="fill-red-500 text-red-500" size={20} />
                          </div>
                          <p className="text-white font-bold text-xl mt-1">{item.price}</p>
                          <p className="text-textMuted text-sm mt-1">{item.seller}</p>
                      </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-textMuted">
                  <p>No saved items yet.</p>
                </div>
              )
            )}
        </div>

        <button onClick={() => navigate('/create')} className="md:hidden fixed bottom-24 right-6 bg-primary flex items-center px-6 py-4 rounded-full shadow-lg text-black font-bold cursor-pointer hover:scale-105 transition z-50">
          <Plus size={24} className="mr-2"/> Add Listing
        </button>
      </div>
    </div>
  );
};
export default MyListingsScreen;