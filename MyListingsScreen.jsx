import React from 'react';
import { Search, MoreVertical, Plus } from 'lucide-react';
import BottomNav from './BottomNav';

const MyListingsScreen = () => {
  const listings = [
    { id: 1, title: 'Nike Air Max 270', price: '$75.00', status: 'Active', color: 'text-[#00E359]', bg: 'bg-[#1F3328]' },
    { id: 2, title: 'Chemistry Textbook', price: '$40.00', status: 'Sold', color: 'text-gray-300', bg: 'bg-[#13231B]' },
  ];

  return (
    <div className="min-h-screen bg-[#0B1410] text-white pb-24">
      <div className="max-w-md mx-auto pt-6 px-4 relative min-h-screen">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Listings</h1>
          <Search className="text-white cursor-pointer" size={24} />
        </div>

        <div>
          {listings.map((item) => (
            <div key={item.id} className="bg-[#13231B] p-3 rounded-xl mb-4 flex items-center hover:bg-[#1a3025] transition cursor-pointer">
              <img src="https://via.placeholder.com/80" alt={item.title} className="w-20 h-20 rounded-lg bg-gray-600 object-cover" />
              <div className="flex-1 ml-4">
                <div className="flex justify-between">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <button><MoreVertical className="text-[#8E9B93]" size={20} /></button>
                </div>
                <p className="text-[#00E359] font-bold mt-1">{item.price}</p>
                <div className={`inline-block px-3 py-1 rounded-full mt-2 ${item.bg}`}>
                  <span className={`${item.color} text-xs font-bold`}>{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-24 right-6 md:absolute md:right-4 md:bottom-24 bg-[#00E359] flex items-center px-6 py-3 rounded-full shadow-lg hover:bg-[#00c94d] transition z-10">
          <Plus color="black" size={24} />
          <span className="text-black font-bold ml-2 text-lg">Add Listing</span>
        </button>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  );
};

export default MyListingsScreen;