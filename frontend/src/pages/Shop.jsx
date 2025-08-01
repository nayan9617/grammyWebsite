import React, { useState } from 'react';
import { Search, ChevronUp, Grid3X3, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrammyStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid');

  const navigate = useNavigate();

const handleProductClick = (product) => {
  navigate('/shoping-details', {
    state: {
      name: product.name,
      price: product.price,
      image: product.image
    }
  });
}

  const products = [
    {
      id: 1,
      name: 'Piano 5',
      price: '₹ 12,000.00',
      image: '/Piano5.jpg'
    },
    {
      id: 2,
      name: 'Piano 6',
      price: '₹ 11,000.00',
      image: '/Piano6.jpg'
    },
    {
      id: 3,
      name: 'Guitar 2',
      price: '₹ 11,000.00',
      image: '/Guitar2.jpg'
    },
    {
      id: 4,
      name: 'Guitar 3',
      price: '₹ 12,000.00',
      image: '/Guitar3.jpg'
    }
  ];

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} (${product.price}) to cart!`);
  };

  const handleSearch = () => {
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="mb-8">
              <h3 className="flex items-start justify-between text-gray-800 font-medium mb-4 text-base">
                Categories
                <ChevronUp className="w-4 h-4 text-gray-600" />
              </h3>
              <ul className="space-y-0">
                <li className="py-2 border-b border-gray-100 last:border-b-0">
                  <a href="#" className="!text-gray-700 hover:!text-gray-900 text-sm">All Products</a>
                </li>
                <li className="py-2 border-b border-gray-100 last:border-b-0">
                  <a href="#" className="!text-gray-700 hover:!text-gray-900 text-sm">Guitar</a>
                </li>
                <li className="py-2 border-b border-gray-100 last:border-b-0">
                  <a href="#" className="!text-gray-700 hover:!text-gray-900 text-sm">Piano</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center justify-between text-gray-800 font-medium mb-4 text-base">
                Price Range
                <ChevronUp className="w-4 h-4 text-gray-600" />
              </h3>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>₹ 10,809.16</span>
                <span>₹ 12,000.00</span>
              </div>
              <div className="relative h-1 bg-gray-300 rounded-full mb-4">
                <div className="absolute h-full bg-yellow-500 rounded-full" style={{ left: '30%', width: '40%' }}></div>
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full cursor-pointer transform -translate-y-1" style={{ left: '30%', marginLeft: '-6px' }}></div>
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full cursor-pointer transform -translate-y-1" style={{ left: '70%', marginLeft: '-6px' }}></div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative text-black">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:bg-white focus:border-gray-400 text-sm"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Search className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3 text-black">
                <span className="text-gray-700 text-sm">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-gray-400 text-sm font-semibold"
                >
                  <option>Featured</option>
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 border rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 border rounded transition-colors ${
                    viewMode === 'list' ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-4' : 'grid-cols-1'} gap-6`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                    onClick={() => handleProductClick(product)}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-2 text-sm">{product.name}</h3>
                    <p className="text-gray-800 font-semibold text-sm mb-3">{product.price}</p>
                    {/* <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 text-sm"
                    >
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GrammyStore;