import React from 'react';
import { ArrowLeft, Share, Heart, Star, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assuming you might want to use local images here eventually, 
// but for now we keep the placeholders for the detail view or you can pass the image via router state later.

const ItemDetailScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto md:pt-8 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 relative h-96 md:h-[500px] bg-gray-800 md:rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534234828563-023c91b40a3b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                
                <div className="md:hidden absolute top-6 left-4 right-4 flex justify-between z-10">
                    <button onClick={() => navigate(-1)} className="bg-black/50 p-2 rounded-full"><ArrowLeft className="text-white" size={24} /></button>
                    <div className="flex gap-3">
                    <button className="bg-black/50 p-2 rounded-full"><Share className="text-white" size={24} /></button>
                    <button className="bg-black/50 p-2 rounded-full"><Heart className="text-white" size={24} /></button>
                    </div>
                </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col justify-center">
                <div className="hidden md:flex justify-between mb-6">
                    <button onClick={() => navigate(-1)} className="flex items-center text-textMuted hover:text-white transition"><ArrowLeft size={20} className="mr-2"/> Back</button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-textMuted hover:text-primary transition"><Share size={20}/> Share</button>
                        <button className="flex items-center gap-2 text-textMuted hover:text-red-500 transition"><Heart size={20}/> Save</button>
                    </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white flex-1 mr-4 leading-tight">IKEA Forsa Desk Lamp</h1>
                    <span className="text-primary text-3xl md:text-4xl font-bold">₦15,000</span>
                </div>

                <div className="flex gap-2 mb-6">
                    <span className="bg-surface border border-secondary text-textMuted px-3 py-1 rounded-md text-sm">Furniture</span>
                    <span className="bg-surface border border-secondary text-green-400 px-3 py-1 rounded-md text-sm">Good Condition</span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Selling my Forsa desk lamp from IKEA. It's in great condition, just a few minor scuffs that are barely noticeable. Provides excellent directed light for reading or studying. Original bulb included.
                </p>

                <div className="bg-surface p-4 rounded-2xl mb-8 flex items-center border border-gray-800">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" className="w-14 h-14 rounded-full object-cover" />
                    <div className="ml-4 flex-1">
                        <h4 className="text-white font-bold text-lg">Alex Johnson</h4>
                        <p className="text-textMuted text-sm">State University • Class of '25</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center justify-end">
                            <Star fill="#FACC15" color="#FACC15" size={16} /> 
                            <span className="ml-1 font-bold text-white">4.9</span>
                        </div>
                        <span className="text-textMuted text-xs">(82 reviews)</span>
                    </div>
                </div>

                <div className="flex gap-4 md:static fixed bottom-0 left-0 right-0 bg-background md:bg-transparent border-t md:border-t-0 border-surface p-4 md:p-0 z-50">
                    <button 
                        onClick={() => navigate('/chat/1')} // Connects to Chat Screen
                        className="flex-1 border-2 border-primary py-4 rounded-xl text-primary font-bold hover:bg-primary/10 transition flex justify-center items-center gap-2"
                    >
                        <MessageCircle size={20} /> Chat with Seller
                    </button>
                    <button className="flex-1 bg-primary py-4 rounded-xl text-black font-bold hover:bg-green-400 transition shadow-lg shadow-green-900/20">
                        Make Offer
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailScreen;