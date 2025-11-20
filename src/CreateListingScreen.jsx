import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon, ChevronDown, Plus, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateListingScreen = () => {
  const navigate = useNavigate();
  
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const halls = [
    "Ameyo", "Bethel", "Crystal", "Diamond", "Emerald", "FAD", "Gideon Troopers",
    "Havilah", "Neal Wilson", "Nelson Mandela", "Nyberg", "Off-Campus",
    "Ogden", "Platinum", "Queen Esther", "Samuel Akande", "Sapphire", "Topaz",
    "Welch", "Winslow"
  ];

  const conditions = [
    "New",
    "Used - Like New",
    "Used - Good",
    "Used - Fair",
    "Defective / For Parts"
  ];

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newImageUrls = files.map(file => URL.createObjectURL(file));
      setSelectedImages(prev => [...prev, ...newImageUrls]);
    }
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages(prevImages => 
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handlePost = () => {
    alert("Success! Your item has been posted to Campus Marketplace.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-surface p-2 rounded-full transition"><X size={24} /></button>
            <h1 className="text-2xl md:text-3xl font-bold">List Your Item</h1>
          </div>
          <button onClick={handlePost} className="hidden md:block bg-primary text-black px-8 py-2 rounded-full font-bold hover:bg-green-400 transition">Post Now</button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* --- IMAGE UPLOAD SECTION --- */}
          <div className="w-full md:w-1/3">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              multiple 
              accept="image/*" 
            />

            {selectedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {selectedImages.map((img, index) => (
                  <div key={index} className="relative h-32 md:h-40 rounded-2xl overflow-hidden border border-surface group">
                    <img src={img} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-black/60 hover:bg-red-600 text-white p-1 rounded-full backdrop-blur-sm transition"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <div onClick={handleImageClick} className="h-32 md:h-40 rounded-2xl border-2 border-dashed border-surface flex items-center justify-center cursor-pointer hover:border-primary transition">
                  <Plus className="text-textMuted" />
                </div>
              </div>
            ) : (
              <div onClick={handleImageClick} className="border-2 border-dashed border-surface hover:border-primary rounded-3xl h-64 md:h-96 flex flex-col items-center justify-center cursor-pointer bg-surface/20 transition group">
                <div className="bg-surface p-4 rounded-full mb-4 group-hover:scale-110 transition">
                  <ImageIcon size={32} className="text-textMuted group-hover:text-white" />
                </div>
                <p className="font-bold text-lg mb-1">Add Photos</p>
                <p className="text-textMuted text-sm">Up to 5 images</p>
              </div>
            )}
          </div>

          {/* --- FORM SECTION --- */}
          <div className="w-full md:w-2/3 space-y-6">
            
            {/* Title */}
            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Title</label>
                <input type="text" className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none transition text-lg" placeholder="e.g. Calculus Textbook, barely used" />
            </div>
            
            {/* ROW 1: Price & Category */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Price</label>
                    <div className="flex items-center bg-surface rounded-xl border border-transparent focus:border-primary px-4 transition">
                        <span className="text-textMuted mr-2 text-lg">₦</span>
                        <input type="number" className="bg-transparent text-white w-full p-4 outline-none text-lg" placeholder="0.00" />
                    </div>
                </div>
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Category</label>
                    <div className="relative">
                        <select className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option>Select...</option>
                            <option>Books</option>
                            <option>Electronics</option>
                            <option>Furniture</option>
                            <option>Clothing</option>
                            <option>Sports</option>
                            <option>Dorm Essentials</option>
                            <option>Others</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            {/* ROW 2: Condition & Hall */}
            <div className="flex flex-col md:flex-row gap-4">
                
                {/* --- NEW CONDITION SELECTOR --- */}
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Condition</label>
                    <div className="relative">
                        <div className="absolute left-4 top-4 text-textMuted pointer-events-none">
                            <Tag size={20} />
                        </div>
                        <select className="w-full bg-surface text-white p-4 pl-12 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option>Select Condition...</option>
                            {conditions.map((cond, index) => (
                                <option key={index} value={cond}>{cond}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>

                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Hall / Location</label>
                    <div className="relative">
                        <div className="absolute left-4 top-4 text-textMuted pointer-events-none">
                            <MapPin size={20} />
                        </div>
                        <select className="w-full bg-surface text-white p-4 pl-12 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option>Select Hall...</option>
                            {halls.map((hall, index) => (
                                <option key={index} value={hall}>{hall}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Description</label>
                <textarea className="w-full bg-surface text-white p-4 rounded-xl h-40 border border-transparent focus:border-primary outline-none resize-none transition text-lg" placeholder="Describe your item..." />
            </div>

            <button onClick={handlePost} className="md:hidden w-full bg-primary text-black py-4 rounded-xl font-bold text-lg shadow-lg mt-4">Post Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateListingScreen;