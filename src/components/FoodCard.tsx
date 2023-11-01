"use client";

import { IFood } from "@/constants/common";
import {
  addToCart,
  decreaseQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/api/features/services/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

interface Props {
  food: IFood; 
}
const FoodCard: React.FC<Props> = ({ food }) => {
  const { cart, total } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
   
    dispatch(addToCart(product));
  };

  const cartItem = cart.find((item: any) => item._id === food._id);

  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const des =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Vel blanditiis voluptates quam ipsam nam nemo dolorum voluptatem dignissimos ducimus nihil. Fuga exercitationem eveniet inventore deserunt pariatur tenetur necessitatibus cumque dolor asperiores odit magnam quis, id delectus quisquam ducimus, consectetur distinctio fugiat dignissimos? Itaque provident dolor labore non hic. ";
  const description = des && des.length > 100 ? `${des.slice(0, 100)}...` : des;
  return (
    <div className="bg-white shadow-md rounded-lg p-2 pb-5 w-full">
      <div className="text-center mb-4">
        <img src={food.image} alt={food.name} className="h-32 mx-auto mb-2" />
        <p className="font-semibold">{food.name}</p>
        <p className="text-gray-500">{food?.category?.name}</p>
        <p className="text-lg font-bold">$ {food.price}</p>
        <p className="text-base "> {description} </p>
      </div>
      {cartItem ? (
        <div className="text-center font-semibold">
          <div className="flex items-center justify-around  text-white rounded-full px-4 py-2 w-full bg-[#44331e] ">
            <MinusCircleOutlined
              className="minus"
              onClick={() => dispatch(decreaseQuantity(food?._id))}
            />
            {quantityInCart}
            <PlusCircleOutlined
              onClick={() => dispatch(incrementQuantity(food?._id))}
              className="plus"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => handleAddToCart(food)}
          // disabled={addedToCart}
          className="bg-[#EA972D] text-white rounded-full font-semibold px-4 py-2 w-full hover:bg-[#44331e]"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default FoodCard;
