import React from 'react';
import { X, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateListingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-surface p-2 rounded-full transition"><X size={24} /></button>
            <h1 className="text-2xl md:text-3xl font-bold">List Your Item</h1>
          </div>
          <button className="hidden md:block bg-primary text-black px-8 py-2 rounded-full font-bold hover:bg-green-400 transition">Post Now</button>
        </div>

        {/* Desktop Split Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: Image Upload */}
          <div className="w-full md:w-1/3">
            <div className="border-2 border-dashed border-surface hover:border-primary rounded-3xl h-64 md:h-96 flex flex-col items-center justify-center cursor-pointer bg-surface/20 transition group">
              <div className="bg-surface p-4 rounded-full mb-4 group-hover:scale-110 transition">
                <ImageIcon size={32} className="text-textMuted group-hover:text-white" />
              </div>
              <p className="font-bold text-lg mb-1">Add Photos</p>
              <p className="text-textMuted text-sm">Up to 5 images</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-2/3 space-y-6">
            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Title</label>
                <input type="text" className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none transition text-lg" placeholder="e.g. Calculus Textbook, barely used" />
            </div>
            
            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Price</label>
                <div className="flex items-center bg-surface rounded-xl border border-transparent focus-within:border-primary px-4 transition">
                    <span className="text-textMuted mr-2 text-lg">$</span>
                    <input type="number" className="bg-transparent text-white w-full p-4 outline-none text-lg" placeholder="0.00" />
                </div>
            </div>

            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Category</label>
                <div className="relative">
                    <select className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                        <option>Select a category...</option>
                        <option>Books</option>
                        <option>Furniture</option>
                        <option>Electronics</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                </div>
            </div>

            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Description</label>
                <textarea className="w-full bg-surface text-white p-4 rounded-xl h-40 border border-transparent focus:border-primary outline-none resize-none transition text-lg" placeholder="Describe your item..." />
            </div>

            {/* Mobile Post Button */}
            <button className="md:hidden w-full bg-primary text-black py-4 rounded-xl font-bold text-lg shadow-lg mt-4">Post Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateListingScreen;