import broomImg from './assets/images/broom.jpeg';
import ironImg from './assets/images/iron.jpeg';
import plateImg from './assets/images/disposable-plate.jpeg';
import mopImg from './assets/images/mop.jpeg';
import chemBookImg from './assets/images/chemistry-textbook.jpg'; // Re-added this!

export const products = [
  // --- PUBLIC ITEMS ---
  {
    id: 1,
    title: "Calculus Textbook",
    price: "₦5,000",
    status: "Active",
    category: "Books",
    condition: "Used - Good",
    description: "Calculus Early Transcendentals (8th Edition). Used for two semesters but no missing pages.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    seller: "Jessica Eguasa",
    sellerImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    location: "Platinum Hall",
    time: "2h ago"
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
    seller: "Chigere-Isaac",
    sellerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    location: "Bethel Hall",
    time: "4h ago"
  },
  {
    id: 3,
    title: "Local Broom (Igbale)",
    price: "₦800",
    status: "Active",
    category: "Dorm Essentials",
    condition: "New",
    description: "Strong traditional broom. Very effective for sweeping hostel floors.",
    image: broomImg,
    seller: "Roseline Edward",
    sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    location: "Havilah Hall",
    time: "5h ago"
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
    seller: "Chigere-Isaac",
    sellerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    location: "Bethel Hall",
    time: "1d ago"
  },
  {
    id: 5,
    title: "Physics Textbook",
    price: "₦4,500",
    status: "Active",
    category: "Books",
    condition: "Used - Fair",
    description: "Fundamentals of Physics. Cover is slightly worn but inside is clean.",
    image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=400&q=80",
    seller: "Jessica Eguasa",
    sellerImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    location: "Platinum Hall",
    time: "1d ago"
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
    seller: "Roseline Edward",
    sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    location: "Havilah Hall",
    time: "2d ago"
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
    seller: "Roseline Edward",
    sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    location: "Havilah Hall",
    time: "3d ago"
  },
  {
    id: 8,
    title: "Electric Iron",
    price: "₦8,000",
    status: "Active",
    category: "Electronics",
    condition: "Used - Good",
    description: "Heavy duty pressing iron. Heats up very fast.",
    image: ironImg,
    seller: "Chigere-Isaac",
    sellerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    location: "Bethel Hall",
    time: "3d ago"
  },

  // --- YOUR ITEMS (Moved here to fix errors!) ---
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
    location: "Bethel Hall",
    time: "1w ago"
  },
  {
    id: 102,
    title: "Chemistry Textbook",
    price: "₦15,000",
    status: "Sold",
    category: "Books",
    condition: "Used - Fair",
    description: "Organic Chemistry by Klein. Some highlighting and notes in margins, but fully readable.",
    image: chemBookImg, // Now correctly used!
    seller: "You",
    sellerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    location: "Bethel Hall",
    time: "3w ago"
  }
];