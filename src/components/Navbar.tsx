"use client";
import { message } from "@/helpers/toast/toastHelper";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { clearCart } from "@/redux/api/features/services/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { role, email } = getUserInfo() as any;

  const { data, error, isLoading, refetch } = useGetSingleUserQuery(email);
  const router = useRouter();
  const { cart, total } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-30 ${
        scrolled ? "bg-[#001529] bg-opacity-80" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li><a>Item 1</a></li>
            <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <Link href="/home" className="btn btn-ghost normal-case text-xl -mt-3">
          <img
            className="h-14"
            src="https://i.ibb.co/hFTdzyM/received-928227521113452.png"
            alt="received-928227521113452"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul> */}
      </div>
      <div className="navbar-end">
        <div className="flex">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-slate-50"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart?.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart?.length} Items</span>
                <span className="text-info">Subtotal: ${total}</span>
                <div className="card-actions">
                  <Link className="btn btn-xs " href="/checkout">
                    View cart
                  </Link>
                  <button
                    onClick={() => handleClearCart()}
                    className="btn btn-xs btn-warning"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-ghost btn-circle text-slate-50">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          {email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      data
                        ? data?.data?.profileImage
                        : "https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={`${role}/profile`} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  {email ? (
                    <a
                      onClick={() => {
                        localStorage.clear();
                        message.success("logged out");
                        router.push("/login");
                      }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link href="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <Link className="mt-2 ml-2 btn btn-sm" href="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
