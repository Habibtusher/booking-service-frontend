"use client"

import { IFood } from '@/constants/common';
import { addToCart, decreaseQuantity, incrementQuantity, removeFromCart } from '@/redux/api/features/services/serviceSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

interface Props {
    food: IFood; // Use the Food interface as the prop type
}
const FoodCard: React.FC<Props> = ({ food }) => {

    const [addedToCart, setAddedToCart] = useState(false);
    const { cart, total } = useAppSelector((state) => state.service)
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: any) => {
        setAddedToCart(true);
        dispatch(addToCart(product));
    };


    const cartItem = cart.find((item:any) => item._id === food._id);
    console.log(cart, cartItem, food);
    const quantityInCart = cartItem ? cartItem.quantity : 0;
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <div className="text-center mb-4">
                <img src={food.image} alt={food.name} className="w-32 h-32 mx-auto mb-2" />
                <p className="font-semibold">{food.name}</p>
                <p className="text-gray-500">{food?.category?.name}</p>
                <p className="text-lg font-bold">$ {food.price}</p>
            </div>
            {
                cartItem ? (
                    <div className="text-center">
                        <div className="flex items-center justify-around ">
                            <MinusCircleOutlined className="minus" onClick={() => dispatch(decreaseQuantity(food?._id))} />
                            {quantityInCart}
                            <PlusCircleOutlined onClick={() => dispatch(incrementQuantity(food?._id))} className="plus" />
                        </div>
                    </div>) :
                    <button
                        onClick={() => handleAddToCart(food)}
                        // disabled={addedToCart}
                        className="bg-blue-500 text-white rounded-full px-4 py-2 w-full hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
            }

        </div>
    );
};

export default FoodCard;