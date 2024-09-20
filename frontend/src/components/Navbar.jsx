import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useCartStore } from "../store/useCartStore";
import { SiShopware } from "react-icons/si";
import {
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-green-200">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-green-800 flex items-center space-x-2"
          >
            <SiShopware className="text-green-500 text-3xl" />
            <span className="text-green-500">ECO-MART</span>
          </Link>

          <button
            className="md:hidden text-green-800 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0`}
          >
            <Link
              to={"/"}
              className="text-gray-600 text-lg hover:text-gray-800 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-gray-600 hover:text-green-800 transition duration-300 ease-in-out"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-green-800"
                  size={20}
                />
                <span className="hidden sm:inline text-black">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-green-600 transition duration-300 ease-in-out">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            {isAdmin && (
              <Link
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
