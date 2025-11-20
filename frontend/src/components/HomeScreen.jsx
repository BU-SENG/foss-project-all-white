import React, { useEffect, useState } from "react";
import { useProductsStore } from "../stores/useProductsStore";
import { Link } from "react-router-dom";
import {
  Search,
  Smartphone,
  BookOpen,
  Shirt,
  Coffee,
  BedDouble,
  Wrench,
  CheckCircle,
  Star,
  Zap,
  ShieldCheck,
  Plus,
  Tag,
  Users,
  Filter,
  Grid,
  List,
  MapPin,
  Clock,
} from "lucide-react";

const ICON_MAP = {
  electronics: <Smartphone className="w-4 h-4" />,
  textbooks: <BookOpen className="w-4 h-4" />,
  fashion: <Shirt className="w-4 h-4" />,
  food: <Coffee className="w-4 h-4" />,
  furniture: <BedDouble className="w-4 h-4" />,
  services: <Wrench className="w-4 h-4" />,
  all: <Tag className="w-4 h-4" />,
};

const HomeScreen = () => {
  const { products, fetchProducts, loading } = useProductsStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categories = [
    { id: "all", name: "All Items", icon: "all", count: products.length },
    { id: "electronics", name: "Electronics", icon: "electronics", count: products.filter(p => p.category === 'electronics').length },
    { id: "textbooks", name: "Textbooks", icon: "textbooks", count: products.filter(p => p.category === 'textbooks').length },
    { id: "fashion", name: "Fashion", icon: "fashion", count: products.filter(p => p.category === 'fashion').length },
    { id: "furniture", name: "Furniture", icon: "furniture", count: products.filter(p => p.category === 'furniture').length },
  ];

  // Advanced filtering
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm === "" || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        return 0;
    }
  });

  const featuredProducts = sortedProducts.slice(0, 6);
  const trendingProducts = sortedProducts.slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="rounded-lg h-12 w-12 border-4 border-gray-700 border-t-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Campus Market</h1>
                <p className="text-gray-400 text-sm">Buy & Sell in Your Campus</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search textbooks, electronics, furniture..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/create" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>List Item</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-gray-800 border border-gray-700 p-4">
              <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Categories</span>
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {ICON_MAP[category.icon]}
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm bg-gray-600 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-gray-800 border border-gray-700 p-4">
              <h3 className="font-semibold text-lg mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 border border-gray-700 p-4">
              <h3 className="font-semibold text-lg mb-4">Market Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Listings</span>
                  <span className="text-white">{products.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg. Price</span>
                  <span className="text-white">
                    ${Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length) || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">New Today</span>
                  <span className="text-white">{products.length}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls Bar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-800 border border-gray-700">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  {sortedProducts.length} items found
                </span>
                
                {/* View Toggle */}
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-400"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-400"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Featured Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Featured Listings</h2>
                <Link to="/featured" className="text-blue-400 hover:text-blue-300 text-sm">
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            </section>

            {/* Trending Now */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trendingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode="list" />
                ))}
              </div>
            </section>

            {/* All Listings */}
            {sortedProducts.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">All Listings</h2>
                <div className={`gap-4 ${
                  viewMode === "grid" 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                    : "space-y-4"
                }`}>
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer - Clean Design */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Campus Market</h4>
              <p className="text-gray-400">Your trusted campus trading platform.</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Buy</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white transition-colors">Browse Items</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Deals</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Sell</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><Link to="/create" className="hover:text-white transition-colors">Create Listing</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Seller Guide</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Safety Tips</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Campus Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, viewMode }) => {
  if (viewMode === "list") {
    return (
      <Link to={`/item/${product.id}`} className="block">
        <div className="bg-gray-800 border border-gray-700 p-4 hover:border-gray-600 transition-colors">
          <div className="flex items-start space-x-4">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Campus</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>2h ago</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">${product.price}</div>
                  <div className="text-sm text-gray-400">{product.seller}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link to={`/item/${product.id}`} className="block">
      <div className="bg-gray-800 border border-gray-700 p-4 hover:border-gray-600 transition-colors h-full">
        <div className="relative mb-3">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
              {product.category}
            </span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">${product.price}</div>
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>{product.seller}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeScreen;