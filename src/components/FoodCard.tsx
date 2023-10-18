"use client"

import { IFood } from '@/constants/common';
import React, { useState } from 'react';

interface Props {
    food: IFood; // Use the Food interface as the prop type
  }
const FoodCard: React.FC<Props> = ({ food}) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        setAddedToCart(true);
        // You can add your cart functionality here.
        // For example, send the selected food item to the cart.
    };
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <div className="text-center mb-4">
                <img src={food.image} alt={food.name} className="w-32 h-32 mx-auto mb-2" />
                <p className="font-semibold">{food.name}</p>
                <p className="text-gray-500">{food.category}</p>
                <p className="text-lg font-bold">$ {food.price}</p>
            </div>
            <button
                onClick={addToCart}
                disabled={addedToCart}
                className="bg-blue-500 text-white rounded-full px-4 py-2 w-full hover:bg-blue-700"
            >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default FoodCard;