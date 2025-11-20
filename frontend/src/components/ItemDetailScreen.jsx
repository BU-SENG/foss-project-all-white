import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailScreen = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // TODO: Replace with actual API call
        setItem({
          id: id,
          title: 'Sample Textbook',
          description: 'This is a gently used textbook for Computer Science 101. Perfect condition with no highlights or markings.',
          price: 29.99,
          image: 'https://via.placeholder.com/400x300',
          seller: 'John Doe',
          category: 'Books',
          condition: 'Like New'
        });
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  );
  
  if (!item) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-red-500">Item not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h1>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">${item.price}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-gray-600 text-sm">Category</span>
                  <p className="font-medium">{item.category}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Condition</span>
                  <p className="font-medium">{item.condition}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-gray-600 text-sm">Description</span>
                <p className="text-gray-800 mt-1">{item.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-gray-600 text-sm">Seller</span>
                <p className="font-medium">{item.seller}</p>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailScreen;