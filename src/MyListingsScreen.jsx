import React, { useState, useEffect } from 'react';
import { Search, MoreVertical, Plus, Tag, Heart, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSavedItems } from './SavedContext'; 
import { useProducts } from './ProductContext'; 
import { useAuth } from './AuthContext';

const MyListingsScreen = () => {
  const navigate = useNavigate();
  const savedContext = useSavedItems();
  const productContext = useProducts();
  const authContext = useAuth();

  const [activeTab, setActiveTab] = useState('listings'); 
  const [isLoading, setIsLoading] = useState(true);

  // Redirect Logic
  useEffect(() => {
    if (authContext && !authContext.user) {
      navigate('/login');
    } else if (authContext && authContext.user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false); 
    }
  }, [authContext, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
      </div>
    );
  }

  if (!authContext || !productContext || !savedContext) {
     return <div className="text-white p-10">Error: Context not loaded. Try refreshing.</div>;
  }

  const { savedIds } = savedContext;
  const { products, toggleProductStatus } = productContext;
  const { user, profile, logout } = authContext;

  // --- FIX: Filter by the secure seller_id (UUID) OR the old hardcoded name ---
  const savedProducts = products.filter(item => savedIds.includes(item.id));
  const myListings = products.filter(item => item.seller_id === user.id); 

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8 relative min-h-screen md:min-h-0">
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Profile</h1>
            <p className="text-textMuted mt-1">Hello, {profile?.full_name || user?.email}</p>
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

        <div className="flex gap-6 border-b border-surface mb-6">
          <button onClick={() => setActiveTab('listings')} className={`pb-2 text-lg font-bold transition ${activeTab === 'listings' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}>My Listings</button>
          <button onClick={() => setActiveTab('saved')} className={`pb-2 text-lg font-bold transition ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-textMuted'}`}>Saved Items</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* VIEW 1: MY LISTINGS */}
            {activeTab === 'listings' && (
                myListings.length > 0 ? (
                    myListings.map((item) => (
                        <div key={item.id} onClick={() => navigate(`/item/${item.id}`)} className="bg-surface p-4 rounded-2xl flex items-center hover:bg-secondary transition cursor-pointer group border border-transparent hover:border-surface/50">
                            <img src={item.image_url} className="w-24 h-24 rounded-xl object-cover opacity-90" alt={item.title} />
                            <div className="flex-1 ml-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white font-bold text-lg group-hover:text-primary transition">{item.title}</h3>
                                    <button onClick={(e) => e.stopPropagation()} className="p-1 hover:bg-white/10 rounded-full"><MoreVertical className="text-textMuted" size={20} /></button>
                                </div>
                                <p className="text-white font-bold text-xl mt-1">{item.price}</p>
                                <button onClick={(e) => {e.stopPropagation(); toggleProductStatus(item.id, item.status);}} className={`inline-flex items-center px-3 py-1 rounded-full mt-2 border text-xs font-bold uppercase tracking-wide transition hover:scale-105 ${item.status === 'Active' ? 'bg-green-900/30 text-primary border-green-500/30' : 'bg-gray-700/30 text-gray-400 border-gray-600/30'}`}>{item.status} <ChevronDown size={12} className="ml-1" /></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-textMuted">
                        <p>You haven't posted any items yet.</p>
                        <button onClick={() => navigate('/create')} className="mt-4 text-primary hover:underline">Post your first item</button>
                    </div>
                )
            )}

            {/* VIEW 2: SAVED ITEMS (Filter Logic remains the same) */}
            {activeTab === 'saved' && (
              savedProducts.length > 0 ? (
                savedProducts.map((item) => (
                  <div key={item.id} onClick={() => navigate(`/item/${item.id}`)} className="bg-surface p-4 rounded-2xl flex items-center hover:bg-secondary transition cursor-pointer group border border-transparent hover:border-surface/50">
                      <img src={item.image_url} className="w-24 h-24 rounded-xl object-cover" alt={item.title} />
                      <div className="flex-1 ml-4">
                          <div className="flex justify-between items-start">
                              <h3 className="text-white font-bold text-lg group-hover:text-primary transition">{item.title}</h3>
                              <Heart className="fill-red-500 text-red-500" size={20} />
                          </div>
                          <p className="text-white font-bold text-xl mt-1">{item.price}</p>
                          <p className="text-textMuted text-sm mt-1">{item.seller_name}</p>
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

        <div className="mt-12 text-center">
            <button onClick={handleLogout} className="text-red-500 font-bold border border-red-500/50 px-6 py-3 rounded-xl hover:bg-red-500/10 transition w-full md:w-auto">
                Log Out
            </button>
        </div>

        <button onClick={() => navigate('/create')} className="md:hidden fixed bottom-24 right-6 bg-primary flex items-center px-6 py-4 rounded-full shadow-lg text-black font-bold cursor-pointer hover:scale-105 transition z-50">
          <Plus size={24} className="mr-2"/> Add Listing
        </button>
      </div>
    </div>
  );
};
export default MyListingsScreen;