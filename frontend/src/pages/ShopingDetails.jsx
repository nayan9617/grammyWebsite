import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShopingDetails = () => {
  const { state } = useLocation();
  const { name, price, image } = state || {};
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${name} to cart!`);
  };

  return (
    <div className="p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 text-black">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <div className='flex items-start gap-4 mb-2 mx-4'>
            <p className="text-xl text-yellow-700 font-semibold mb-6">{price}</p>
          <p className='text-sm'>{price}/unit</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className=" !bg-gray-200 hover:!bg-gray-300"
              >
                −
              </button>
              <span className="px-3 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className=" !bg-gray-200 hover:!bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
            >
              Add to cart
            </button>
          </div>

          {/* Terms */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Terms and Conditions</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>30-day money-back guarantee</li>
            <li>Shipping: 2–3 Business Days</li>
          </ul>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default ShopingDetails;