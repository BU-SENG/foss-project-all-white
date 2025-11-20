import React from 'react';
import { ArrowLeft, Share, Heart, Star, MessageCircle, MapPin } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSavedItems } from './SavedContext';

// --- IMPORTING LOCAL IMAGES ---
import broomImg from './assets/images/broom.jpeg'; 
import ironImg from './assets/images/iron.jpeg';
import plateImg from './assets/images/disposable-plate.jpeg';
import mopImg from './assets/images/mop.jpeg';
import chemBookImg from './assets/images/chemistry-textbook.jpg';

const ItemDetailScreen = () => {
  // 1. DEFINE HOOKS FIRST
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { toggleSave, isSaved } = useSavedItems();

  // 2. DEFINE THE DATA LIST SECOND (So it exists before we use it)
  const products = [
    {
      id: 1,
      title: "Calculus Textbook",
      price: "₦5,000",
      status: "Active",
      category: "Books",
      condition: "Used - Good",
      description: "Calculus Early Transcendentals (8th Edition). Used for two semesters but no missing pages. Highlights in chapter 4.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
      seller: "Aria Brooks",
      sellerImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      location: "Bethel Hall"
    },
    {
      id: 2,
      title: "Reusable Plastic Cup",
      price: "₦500",
      status: "Active",
      category: "Dorm Essentials",
      condition: "New",
      description: "Hard plastic cup, never used. Got it as a gift but I have too many.",
      image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=400&q=80",
      seller: "Leo Martinez",
      sellerImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      location: "Ameyo Hall"
    },
    {
      id: 3,
      title: "Local Broom (Igbale)",
      price: "₦800",
      status: "Active",
      category: "Dorm Essentials",
      condition: "New",
      description: "Strong traditional broom. Very effective for sweeping hostel floors. Brand new bundle.",
      image: broomImg,
      seller: "Sarah Chen",
      sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
      location: "Neal Wilson"
    },
    {
      id: 4,
      title: "Cleaning Mop",
      price: "₦2,500",
      status: "Active",
      category: "Dorm Essentials",
      condition: "Like New",
      description: "Standard mop with wooden handle. Only used once for move-in cleaning.",
      image: mopImg,
      seller: "Mike Ross",
      sellerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      location: "Samuel Akande Hall"
    },
    {
      id: 5,
      title: "Physics Textbook",
      price: "₦4,500",
      status: "Active",
      category: "Books",
      condition: "Used - Fair",
      description: "Fundamentals of Physics. Cover is slightly worn but inside is clean. Perfect for 100 level.",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=400&q=80",
      seller: "Aria Brooks",
      sellerImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      location: "Winslow Hall"
    },
    {
      id: 6,
      title: "60 Leaves Exercise Book",
      price: "₦300",
      status: "Active",
      category: "Books",
      condition: "New",
      description: "Unused exercise book. I have 5 pieces available if you need more.",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80",
      seller: "John Doe",
      sellerImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
      location: "Nyberg Hall"
    },
    {
      id: 7,
      title: "Disposable Plates (Pack)",
      price: "₦1,500",
      status: "Active",
      category: "Dorm Essentials",
      condition: "New",
      description: "Sealed pack of 50 disposable plates. Great for parties or lazy days.",
      image: plateImg,
      seller: "Sarah Chen",
      sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
      location: "Queen Esther"
    },
    {
      id: 8,
      title: "Electric Iron",
      price: "₦8,000",
      status: "Active",
      category: "Electronics",
      condition: "Used - Good",
      description: "Heavy duty pressing iron. Heats up very fast. Selling because I got a steam iron.",
      image: ironImg,
      seller: "Leo Martinez",
      sellerImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      location: "Havilah Hall"
    },
    
    // --- ITEMS FROM MY LISTINGS (101-102) ---
    {
      id: 101,
      title: "Nike Air Max 270",
      price: "₦75,000",
      status: "Active",
      category: "Clothing",
      condition: "Used - Like New",
      description: "Worn only twice. Size 43. Original box included. Selling because it's a bit tight for me.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80",
      seller: "You",
      sellerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      location: "Bethel Hall"
    },
    {
      id: 102,
      title: "Chemistry Textbook",
      price: "₦15,000",
      status: "Sold",
      category: "Books",
      condition: "Used - Fair",
      description: "Organic Chemistry by Klein. Some highlighting and notes in margins, but fully readable.",
      image: chemBookImg,
      seller: "You",
      sellerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      location: "Bethel Hall"
    }
  ];

  // 3. EXECUTE LOGIC THIRD (Now that products exist, we can find one)
  const product = products.find(p => p.id === parseInt(id));
  const saved = product ? isSaved(product.id) : false;

  if (!product) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center text-white">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Item Not Found</h2>
                <button onClick={() => navigate('/')} className="text-primary hover:underline">Go Home</button>
            </div>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-white pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto md:pt-8 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 relative h-96 md:h-[500px] bg-gray-800 md:rounded-3xl overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                
                <div className="md:hidden absolute top-6 left-4 right-4 flex justify-between z-10">
                    <button onClick={() => navigate(-1)} className="bg-black/50 p-2 rounded-full"><ArrowLeft className="text-white" size={24} /></button>
                    <div className="flex gap-3">
                    <button className="bg-black/50 p-2 rounded-full"><Share className="text-white" size={24} /></button>
                    <button onClick={() => toggleSave(product.id)} className="bg-black/50 p-2 rounded-full">
                        <Heart className={saved ? "fill-red-500 text-red-500" : "text-white"} size={24} />
                    </button>
                    </div>
                </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col justify-center">
                <div className="hidden md:flex justify-between mb-6">
                    <button onClick={() => navigate(-1)} className="flex items-center text-textMuted hover:text-white transition"><ArrowLeft size={20} className="mr-2"/> Back</button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-textMuted hover:text-primary transition"><Share size={20}/> Share</button>
                        
                        {/* Desktop Save Button */}
                        <button onClick={() => toggleSave(product.id)} className={`flex items-center gap-2 transition ${saved ? "text-red-500" : "text-textMuted hover:text-white"}`}>
                            <Heart size={20} className={saved ? "fill-red-500" : ""} /> {saved ? "Saved" : "Save"}
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

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {product.description}
                </p>

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
                        <div className="flex items-center justify-end">
                            <Star fill="#FACC15" color="#FACC15" size={16} /> 
                            <span className="ml-1 font-bold text-white">4.8</span>
                        </div>
                        <span className="text-textMuted text-xs">(12 reviews)</span>
                    </div>
                </div>

                <div className="flex gap-4 md:static fixed bottom-0 left-0 right-0 bg-background md:bg-transparent border-t md:border-t-0 border-surface p-4 md:p-0 z-50">
                    <button 
                        onClick={() => navigate('/chat/new')} 
                        className="flex-1 border-2 border-primary py-4 rounded-xl text-primary font-bold hover:bg-primary/10 transition flex justify-center items-center gap-2"
                    >
                        <MessageCircle size={20} /> Chat with Seller
                    </button>
                    
                    {/* --- Conditional 'Item Sold' Button --- */}
                    {product.status === 'Active' ? (
                        <button className="flex-1 bg-primary py-4 rounded-xl text-black font-bold hover:bg-green-400 transition shadow-lg shadow-green-900/20">
                            Make Offer
                        </button>
                    ) : (
                        <button disabled className="flex-1 bg-gray-700 py-4 rounded-xl text-gray-400 font-bold cursor-not-allowed">
                            Item Sold
                        </button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailScreen;