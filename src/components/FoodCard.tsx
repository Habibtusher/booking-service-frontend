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
  const description = des && des.length > 80 ? `${des.slice(0, 80)}...` : des;
  return (
    <div className="card glass shadow-xl">
      <figure>
        <img className="max-h-40" src={food.image} alt="car!" />
      </figure>
      <div className="card-body items-center text-center p-4">
        <p className="card-title">{food.name}</p>
        <p>$ {food.price}</p>
        <p>{description}</p>

        {cartItem ? (
          <div className="text-center font-semibold w-full">
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
            //       // disabled={addedToCart}
            className="bg-[#EA972D] text-white rounded-full font-semibold px-4 py-2 w-full hover:bg-[#44331e]"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
