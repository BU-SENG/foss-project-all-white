import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const CreateListingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)}><X size={24} /></button>
          <h1 className="text-xl font-bold">List Your Item</h1>
          <div className="w-6" />
        </div>
        <div className="space-y-6">
          <div className="border-2 border-dashed border-surface rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer bg-background hover:border-primary transition">
            <p className="font-bold text-lg mb-1">Add Photos</p>
            <button className="bg-surface px-4 py-2 rounded-lg flex items-center border border-gray-700 mt-2">
              <ImageIcon size={18} className="mr-2" /> Upload Images
            </button>
          </div>
          <input type="text" className="w-full bg-surface text-white p-4 rounded-xl border border-gray-800 outline-none focus:border-primary" placeholder="Title" />
          <textarea className="w-full bg-surface text-white p-4 rounded-xl h-32 border border-gray-800 outline-none focus:border-primary resize-none" placeholder="Description" />
          <div className="flex gap-4">
            <div className="flex-1 bg-surface rounded-xl border border-gray-800 p-4 flex items-center">
              <span className="text-textMuted mr-2">$</span>
              <input type="number" className="bg-transparent text-white w-full outline-none" placeholder="0.00" />
            </div>
            <div className="flex-1 bg-surface rounded-xl border border-gray-800 p-4 flex items-center justify-between">
               <span className="text-textMuted">Category...</span>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default CreateListingScreen;