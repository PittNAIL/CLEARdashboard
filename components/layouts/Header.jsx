"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";

const Header = () => {
  // const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="/">
              <Image
                src="/images/clEARdashboardLogo.jpg"
                // style={{ height: "50px", width: "60px" }}
                height="60"
                width="160"
                alt="ClearDashboard"
              />
            </a>
          </div>
          <Search />

          <div className="flex items-center space-x-2 ml-auto">
            <Link
              href="/cart/Cart"
              className="px-3 py-2 inline-block text-center"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                {/* Favorites  */}
                <span>
                <img
                  src = "https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-178.png"
                  height="50"
                  width="50"
                /> (<b>0</b>)</span>
                
              </span>
            </Link>
            <a href = "/productsview">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
          height="40px"
          width="40px"
           
        />
        </a>
            
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <img className="w-10 h-10 rounded-full" src={"/images/default_profile.png"} />
                <div className="space-y-1 font-medium">
                  <p>
                    Guest
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      guest@email.com
                    </time>
                  </p>
                </div>
              </div>
            
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
