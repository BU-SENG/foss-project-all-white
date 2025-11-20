import broomImg from './assets/images/broom.jpeg';
import ironImg from './assets/images/iron.jpeg';
import plateImg from './assets/images/disposable-plate.jpeg';
import mopImg from './assets/images/mop.jpeg';
// Removed the unused chemistry book import to fix the error

export const products = [
  {
    id: 1,
    title: "Calculus Textbook",
    price: "₦5,000",
    category: "Books",
    condition: "Used - Good",
    description: "Calculus Early Transcendentals (8th Edition). Used for two semesters but no missing pages.",
    // Keeping the Unsplash URL for Calculus (since we don't have a local calculus image)
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    seller: "Aria Brooks",
    sellerImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    location: "Bethel Hall",
    time: "2h ago"
  },
  {
    id: 2,
    title: "Reusable Plastic Cup",
    price: "₦500",
    category: "Dorm Essentials",
    condition: "New",
    description: "Hard plastic cup, never used. Got it as a gift but I have too many.",
    image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=400&q=80",
    seller: "Leo Martinez",
    sellerImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    location: "Ameyo Hall",
    time: "4h ago"
  },
  {
    id: 3,
    title: "Local Broom (Igbale)",
    price: "₦800",
    category: "Dorm Essentials",
    condition: "New",
    description: "Strong traditional broom. Very effective for sweeping hostel floors.",
    image: broomImg,
    seller: "Sarah Chen",
    sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    location: "Neal Wilson",
    time: "5h ago"
  },
  {
    id: 4,
    title: "Cleaning Mop",
    price: "₦2,500",
    category: "Dorm Essentials",
    condition: "Like New",
    description: "Standard mop with wooden handle. Only used once for move-in cleaning.",
    image: mopImg,
    seller: "Mike Ross",
    sellerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    location: "Samuel Akande Hall",
    time: "1d ago"
  },
  {
    id: 5,
    title: "Physics Textbook",
    price: "₦4,500",
    category: "Books",
    condition: "Used - Fair",
    description: "Fundamentals of Physics. Cover is slightly worn but inside is clean.",
    image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=400&q=80",
    seller: "Aria Brooks",
    sellerImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    location: "Winslow Hall",
    time: "1d ago"
  },
  {
    id: 6,
    title: "60 Leaves Exercise Book",
    price: "₦300",
    category: "Books",
    condition: "New",
    description: "Unused exercise book. I have 5 pieces available if you need more.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80",
    seller: "John Doe",
    sellerImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    location: "Nyberg Hall",
    time: "2d ago"
  },
  {
    id: 7,
    title: "Disposable Plates (Pack)",
    price: "₦1,500",
    category: "Dorm Essentials",
    condition: "New",
    description: "Sealed pack of 50 disposable plates. Great for parties or lazy days.",
    image: plateImg,
    seller: "Sarah Chen",
    sellerImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    location: "Queen Esther",
    time: "3d ago"
  },
  {
    id: 8,
    title: "Electric Iron",
    price: "₦8,000",
    category: "Electronics",
    condition: "Used - Good",
    description: "Heavy duty pressing iron. Heats up very fast.",
    image: ironImg,
    seller: "Leo Martinez",
    sellerImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    location: "Havilah Hall",
    time: "3d ago"
  }
];