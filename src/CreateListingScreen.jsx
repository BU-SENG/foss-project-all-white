import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon, ChevronDown, Plus, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from './ProductContext'; 
import { supabase } from './supabaseClient';
import { useAuth } from './AuthContext';

// --- DEFINING EXTERNAL URL COMPONENTS (CRITICAL FOR IMAGE FIX) ---
// Your unique Project ID (derived from your supabase.co URL)
const SUPABASE_PROJECT_ID = 'ligypemgemlmilklqjmklozs';
const BUCKET_NAME = 'item-images';

const CreateListingScreen = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts(); 
  const { user, profile } = useAuth();
  
  // --- FORM STATE ---
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [hall, setHall] = useState('');
  const [description, setDescription] = useState('');
  
  // --- IMAGE STATE ---
  const [imageFiles, setImageFiles] = useState([]); 
  const [previewUrls, setPreviewUrls] = useState([]); 
  const [uploading, setUploading] = useState(false); 
  
  const fileInputRef = useRef(null);

  const halls = ["Ameyo", "Bethel", "Crystal", "Diamond", "Emerald", "FAD", "Gideon Troopers", "Havilah", "Neal Wilson", "Nelson Mandela", "Nyberg", "Off-Campus", "Ogden", "Platinum", "Queen Esther", "Samuel Akande", "Sapphire", "Topaz", "Welch", "Winslow"];
  const conditions = ["New", "Used - Like New", "Used - Good", "Used - Fair", "Defective / For Parts"];

  const handleImageClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setImageFiles(prev => [...prev, ...files]); 
      const newImageUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newImageUrls]);
    }
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(previewUrls[index]); 
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  // --- ASYNC UPLOAD AND POST LOGIC (CORE FUNCTIONALITY) ---
  const handlePost = async () => {
    // 1. Validation Checks
    if (!user) { alert("You must be logged in to post an item."); return; }
    if (!title.trim() || !price || !category || !condition || !hall || !description.trim() || imageFiles.length === 0) {
      alert("Please fill all required fields and add an image.");
      return;
    }
    setUploading(true);
    
    let publicUrl = '';
    const file = imageFiles[0]; 

    try {
      // 2. UPLOAD IMAGE TO SUPABASE STORAGE
      const uniqueFileName = `${user.id}/${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(BUCKET_NAME) 
        .upload(uniqueFileName, file);

      if (uploadError) throw new Error(`Image Upload Failed: ${uploadError.message}`);

      // 3. MANUAL CONSTRUCTION OF THE SECURE PUBLIC URL
      // We use the full external path structure to ensure the link works anywhere.
      const filePath = uploadData.path; 
      publicUrl = `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${filePath}`;

      // 4. INSERT LISTING DATA INTO DATABASE
      const newItem = {
        title: title.trim(),
        price: `₦${parseInt(price).toLocaleString()}`, 
        category,
        condition,
        description: description.trim(),
        image_url: publicUrl, // Save the permanent external URL
        seller_id: user.id, 
        seller_name: profile?.full_name || user.email, 
        hall,
        status: "Active",
      };

      await addProduct(newItem);

      alert("Success! Item posted and image uploaded.");
      navigate('/');
      
    } catch (error) {
      console.error("Posting Error:", error);
      alert(`Posting failed. Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="hover:bg-surface p-2 rounded-full transition"><X size={24} /></button>
            <h1 className="text-2xl md:text-3xl font-bold">List Your Item</h1>
          </div>
          <button onClick={handlePost} disabled={uploading} className="hidden md:block bg-primary text-black px-8 py-2 rounded-full font-bold hover:bg-green-400 transition disabled:bg-gray-600 disabled:text-gray-400">
            {uploading ? 'Uploading...' : 'Post Now'}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* --- IMAGE UPLOAD SECTION (LEFT) --- */}
          <div className="w-full md:w-1/3">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple accept="image/*" />

            {previewUrls.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative h-32 md:h-40 rounded-2xl overflow-hidden border border-surface group">
                    <img src={url} alt="Preview" className="w-full h-full object-cover" />
                    <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-black/60 hover:bg-red-600 text-white p-1 rounded-full backdrop-blur-sm transition"><X size={14} /></button>
                  </div>
                ))}
                <div onClick={handleImageClick} className="h-32 md:h-40 rounded-2xl border-2 border-dashed border-surface flex items-center justify-center cursor-pointer hover:border-primary transition"><Plus className="text-textMuted" /></div>
              </div>
            ) : (
              <div onClick={handleImageClick} className="border-2 border-dashed border-surface hover:border-primary rounded-3xl h-64 md:h-96 flex flex-col items-center justify-center cursor-pointer bg-surface/20 transition group">
                <div className="bg-surface p-4 rounded-full mb-4 group-hover:scale-110 transition"><ImageIcon size={32} className="text-textMuted group-hover:text-white" /></div>
                <p className="font-bold text-lg mb-1">Add Photos</p>
                <p className="text-textMuted text-sm">Up to 5 images</p>
              </div>
            )}
          </div>

          {/* --- FORM FIELDS (RIGHT) --- */}
          <div className="w-full md:w-2/3 space-y-6">
            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none transition text-lg" placeholder="e.g. Calculus Textbook" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Price</label>
                    <div className="flex items-center bg-surface rounded-xl border border-transparent focus:border-primary px-4 transition">
                        <span className="text-textMuted mr-2 text-lg">₦</span>
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="bg-transparent text-white w-full p-4 outline-none text-lg" placeholder="0.00" />
                    </div>
                </div>
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Category</label>
                    <div className="relative">
                        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-surface text-white p-4 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option value="">Select...</option>
                            <option>Books</option><option>Electronics</option><option>Furniture</option><option>Clothing</option><option>Sports</option><option>Dorm Essentials</option><option>Others</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Condition</label>
                    <div className="relative">
                        <div className="absolute left-4 top-4 text-textMuted pointer-events-none"><Tag size={20} /></div>
                        <select value={condition} onChange={e => setCondition(e.target.value)} className="w-full bg-surface text-white p-4 pl-12 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option value="">Select Condition...</option>
                            {conditions.map((c, i) => <option key={i} value={c}>{c}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>
                <div className="flex-1">
                    <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Hall / Location</label>
                    <div className="relative">
                        <div className="absolute left-4 top-4 text-textMuted pointer-events-none"><MapPin size={20} /></div>
                        <select value={hall} onChange={e => setHall(e.target.value)} className="w-full bg-surface text-white p-4 pl-12 rounded-xl border border-transparent focus:border-primary outline-none appearance-none cursor-pointer text-lg">
                            <option value="">Select Hall...</option>
                            {halls.map((h, i) => <option key={i} value={h}>{h}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-5 text-textMuted pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-textMuted mb-2 text-sm font-bold uppercase tracking-wider">Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-surface text-white p-4 rounded-xl h-40 border border-transparent focus:border-primary outline-none resize-none transition text-lg" placeholder="Describe your item..." />
            </div>

            <button onClick={handlePost} disabled={uploading} className="md:hidden w-full bg-primary text-black font-bold py-4 rounded-xl shadow-lg mt-4 disabled:bg-gray-600 disabled:text-gray-400">
                {uploading ? 'Uploading...' : 'Post Item'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateListingScreen;