import React, { useState } from 'react';
import { Search, MoreVertical, Plus, Tag, Heart, ChevronDown, LogOut } from 'lucide-react'; // Added LogOut
import { useNavigate } from 'react-router-dom';
import chemBookImg from './assets/images/chemistry-textbook.jpg';
import { products } from './data'; 
import { useSavedItems } from './SavedContext'; 
import { useProducts } from './ProductContext'; 
import { useAuth } from './AuthContext'; // Import Auth

const MyListingsScreen = () => {
  const navigate = useNavigate();
  const { savedIds } = useSavedItems(); 
  const { products, toggleProductStatus } = useProducts(); 
  const { user, logout } = useAuth(); // Get User and Logout function
  const [activeTab, setActiveTab] = useState('listings'); 

  // If user is not logged in, redirect to login page
  if (!user) {
    navigate('/login');
    return null;
  }

  const savedProducts = products.filter(item => savedIds.includes(item.id));
  const myListings = products.filter(item => item.seller === "You" || item.id === 101 || item.id === 102);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8 relative min-h-screen md:min-h-0">
        
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Profile</h1>
            <p className="text-textMuted mt-1">Hello, {user.name}</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/create')} className="hidden md:flex items-center bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
              <Plus size={20} className="mr-2"/> Add New
            </button>
            <button onClick={handleLogout} className="bg-surface p-2 rounded-full hover:bg-red-500/20 hover:text-red-500 transition">
              <LogOut size={24} />
            </button>
          </div>
        </div>

        {/* ... TABS and GRID remain exactly the same ... */}
        {/* (Copy the Tabs and Grid Logic from your previous MyListingsScreen.jsx here) */}
        <div className="flex gap-6 border-b border-surface mb-6">
          <button onClick={() => setActiveTab('listings')} className={`pb-2 text-lg font-bold transition ${activeTab === 'listings' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}>My Listings</button>
          <button onClick={() => setActiveTab('saved')} className={`pb-2 text-lg font-bold transition ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}>Saved Items</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTab === 'listings' && myListings.map((item) => (
                <div key={item.id} onClick={() => navigate(`/item/${item.id}`)} className="bg-surface p-4 rounded-2xl flex items-center hover:bg-secondary transition cursor-pointer group border border-transparent hover:border-surface/50">
                    <img src={item.image} className="w-24 h-24 rounded-xl object-cover opacity-90" alt={item.title} />
                    <div className="flex-1 ml-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-white font-bold text-lg group-hover:text-primary transition">{item.title}</h3>
                            <button onClick={(e) => e.stopPropagation()} className="p-1 hover:bg-white/10 rounded-full"><MoreVertical className="text-textMuted" size={20} /></button>
                        </div>
                        <p className="text-white font-bold text-xl mt-1">{item.price}</p>
                        <button onClick={(e) => {e.stopPropagation(); toggleProductStatus(item.id);}} className={`inline-flex items-center px-3 py-1 rounded-full mt-2 border text-xs font-bold uppercase tracking-wide transition hover:scale-105 ${item.status === 'Active' ? 'bg-green-900/30 text-primary border-green-500/30' : 'bg-gray-700/30 text-gray-400 border-gray-600/30'}`}>{item.status} <ChevronDown size={12} className="ml-1" /></button>
                    </div>
                </div>
            ))}

            {activeTab === 'saved' && savedProducts.map((item) => (
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
            ))}
        </div>

        <div className="mt-12 text-center">
            <button onClick={handleLogout} className="text-red-500 font-bold border border-red-500/50 px-6 py-3 rounded-xl hover:bg-red-500/10 transition w-full md:w-auto">
                Log Out
            </button>
        </div>

        {/* Mobile Add Button */}
        <button onClick={() => navigate('/create')} className="md:hidden fixed bottom-24 right-6 bg-primary flex items-center px-6 py-4 rounded-full shadow-lg text-black font-bold cursor-pointer hover:scale-105 transition z-50">
          <Plus size={24} className="mr-2"/> Add Listing
        </button>
      </div>
    </div>
  );
};
export default MyListingsScreen;