import React from 'react';
import { ArrowLeft, Share, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ItemDetailScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24">
      <div className="max-w-md mx-auto relative">
        <div className="relative h-96 bg-gray-800">
          <img src="https://images.unsplash.com/photo-1534234828563-023c91b40a3b?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
          <div className="absolute top-6 left-4 right-4 flex justify-between z-10">
            <button onClick={() => navigate(-1)} className="bg-black/50 p-2 rounded-full"><ArrowLeft className="text-white" size={24} /></button>
            <div className="flex gap-3">
              <button className="bg-black/50 p-2 rounded-full"><Share className="text-white" size={24} /></button>
              <button className="bg-black/50 p-2 rounded-full"><Heart className="text-white" size={24} /></button>
            </div>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-white flex-1 mr-4">IKEA Desk Lamp</h1>
            <span className="text-primary text-2xl font-bold">$15</span>
          </div>
          <p className="text-gray-300 mt-6">Selling my Forsa desk lamp from IKEA. It's in great condition, just a few minor scuffs that are barely noticeable.</p>
          <div className="bg-surface p-4 rounded-xl mt-8 flex items-center">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-4 flex-1">
              <h4 className="text-white font-bold">Alex Johnson</h4>
              <p className="text-textMuted text-sm">State University</p>
            </div>
            <Star fill="#FACC15" color="#FACC15" size={16} /> <span className="ml-1 font-bold">4.9</span>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-surface p-4 z-50">
          <div className="max-w-md mx-auto flex gap-4">
            <button className="flex-1 border border-primary py-3 rounded-full text-primary font-bold">Chat</button>
            <button className="flex-1 bg-primary py-3 rounded-full text-black font-bold">Make Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetailScreen;