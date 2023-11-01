"use client";
import { Button, Typography } from "antd";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCart,
  decreaseQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/api/features/services/serviceSlice";
import { message } from "@/helpers/toast/toastHelper";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart, total } = useAppSelector((state) => state.service);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="container mx-auto min-h-screen mt-16">
      <div className="text-center ">
        <Typography className="cart-count-text">
          Your Cart ({cart?.length} Items){" "}
        </Typography>
        {cart?.length === 0 && <Link href="/home">Back to home</Link>}
      </div>

      {cart?.length !== 0 && (
        <div className="cart-page">
          <div className="cart-div">
            <table>
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cart?.map((element: any, key: any) => (
                <tr key={key}>
                  <td>
                    <div className="cart-info">
                      <img src={element.image} />
                      <div>
                        <Typography className="product-name">
                          {element.name}
                        </Typography>
                        <Typography>Price: ${element.price}</Typography>
                        <Typography
                          className="remove"
                          onClick={() => handleRemove(element._id)}
                        >
                          Remove
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>${element.price}</td>
                  <td>
                    <div className="flex quantity">
                      <MinusCircleOutlined
                        onClick={() => dispatch(decreaseQuantity(element?._id))}
                        className="minus"
                      />
                      <p>{element.quantity}</p>

                      <PlusCircleOutlined
                        onClick={() =>
                          dispatch(incrementQuantity(element?._id))
                        }
                        className="plus"
                      />
                    </div>
                  </td>
                  <td>${element.quantity * element.price} </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="total-price">
            <table>
              <tr>
                <td>Subtotal</td>
                <td>${total}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${total}</td>
              </tr>
            </table>
          </div>
          <div className="btn-text-align">
            <button
              onClick={() => {
                message.success("Order placed");
                router.push("/home");
              }}
              className="checkout-btn px-4 py-2 rounded-full font-semibold"
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
