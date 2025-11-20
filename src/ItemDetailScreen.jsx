import React from 'react';
import { ArrowLeft, Share, Heart, Star, MessageCircle, MapPin } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from './data'; // Import shared data
import { useSavedItems } from './SavedContext'; // Import the hook

const ItemDetailScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toggleSave, isSaved } = useSavedItems(); // Get tools from context

  const product = products.find(p => p.id === parseInt(id));
  const saved = product ? isSaved(product.id) : false;

  if (!product) return null;

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto md:pt-8 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative h-96 md:h-[500px] bg-gray-800 md:rounded-3xl overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="md:hidden absolute top-6 left-4 right-4 flex justify-between z-10">
                    <button onClick={() => navigate(-1)} className="bg-black/50 p-2 rounded-full"><ArrowLeft className="text-white" size={24} /></button>
                    <div className="flex gap-3">
                        <button className="bg-black/50 p-2 rounded-full"><Share className="text-white" size={24} /></button>
                        
                        {/* MOBILE SAVE BUTTON */}
                        <button 
                            onClick={() => toggleSave(product.id)}
                            className="bg-black/50 p-2 rounded-full"
                        >
                            <Heart className={saved ? "fill-red-500 text-red-500" : "text-white"} size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col justify-center">
                <div className="hidden md:flex justify-between mb-6">
                    <button onClick={() => navigate(-1)} className="flex items-center text-textMuted hover:text-white transition"><ArrowLeft size={20} className="mr-2"/> Back</button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-textMuted hover:text-primary transition"><Share size={20}/> Share</button>
                        
                        {/* DESKTOP SAVE BUTTON */}
                        <button 
                            onClick={() => toggleSave(product.id)}
                            className={`flex items-center gap-2 transition ${saved ? "text-red-500" : "text-textMuted hover:text-white"}`}
                        >
                            <Heart size={20} className={saved ? "fill-red-500" : ""} /> 
                            {saved ? "Saved" : "Save"}
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white flex-1 mr-4 leading-tight">{product.title}</h1>
                    <span className="text-primary text-3xl md:text-4xl font-bold">{product.price}</span>
                </div>
                
                <div className="flex gap-2 mb-6">
                    <span className="bg-surface border border-secondary text-textMuted px-3 py-1 rounded-md text-sm">{product.category}</span>
                    <span className="bg-surface border border-secondary text-green-400 px-3 py-1 rounded-md text-sm">{product.condition}</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{product.description}</p>

                {/* Seller Card */}
                <div className="bg-surface p-4 rounded-2xl mb-8 flex items-center border border-gray-800">
                    <img src={product.sellerImage} className="w-14 h-14 rounded-full object-cover" />
                    <div className="ml-4 flex-1">
                        <h4 className="text-white font-bold text-lg">{product.seller}</h4>
                        <div className="flex items-center text-textMuted text-sm">
                            <MapPin size={14} className="mr-1" />
                            {product.location}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center justify-end"><Star fill="#FACC15" color="#FACC15" size={16} /><span className="ml-1 font-bold text-white">4.8</span></div>
                        <span className="text-textMuted text-xs">(12 reviews)</span>
                    </div>
                </div>

                <div className="flex gap-4 md:static fixed bottom-0 left-0 right-0 bg-background md:bg-transparent border-t md:border-t-0 border-surface p-4 md:p-0 z-50">
                    <button onClick={() => navigate('/chat/new')} className="flex-1 border-2 border-primary py-4 rounded-xl text-primary font-bold hover:bg-primary/10 transition flex justify-center items-center gap-2"><MessageCircle size={20} /> Chat with Seller</button>
                    <button className="flex-1 bg-primary py-4 rounded-xl text-black font-bold hover:bg-green-400 transition shadow-lg shadow-green-900/20">Make Offer</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailScreen;