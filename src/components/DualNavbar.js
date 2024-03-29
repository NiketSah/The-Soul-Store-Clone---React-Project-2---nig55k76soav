import React, { useState } from "react";
import {
  FaBars,
  FaFilter,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "../utilities/authSlice";
import SearchResult from "./SearchResult";

const DualNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("men");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleTopNavCategoryClick = (category) => {
    setActiveCategory(category);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeSidebar = () => {
    setIsMenuOpen(false);
  };
  const handleSearch = () => {
    <SearchResult search={search} />;
  };

  // const renderBottomNavLinks = () => {
  //   switch (activeCategory) {
  //     case "men":
  //       return (
  //         <>
  //           <li>TOPWEAR</li>
  //           <li>SHIRTS</li>
  //           <li>JEANS</li>
  //           <li>SNEAKERS</li>
  //         </>
  //       );
  //     case "women":
  //       return (
  //         <>
  //           <li>KURTA</li>
  //           <li>LEGGINGS</li>
  //           <li>DRESSES</li>
  //           <li>BOTTOMWEAR</li>
  //         </>
  //       );
  //     case "kids":
  //       return (
  //         <>
  //           <li>TSHIRTS</li>
  //           <li>SHORTS</li>
  //           <li>SKIRTS</li>
  //           <li>VACATION WEAR</li>
  //         </>
  //       );
  //     default:
  //       return null;
  //   }
  // };


  return (
    <div className="">
      <div
        className={`fixed top-0 left-0 h-full w-3/5 bg-white z-20 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        {/* Close icon to close the sidebar */}
        <div className="text-right p-8 ">
          <FaTimes
            size={24}
            onClick={closeSidebar}
            className="cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <>
            <ul className="p-3 m-3 flex flex-wrap ">
              <Link to="/main">
                <li
                  className={`cursor-pointer p-4 ${activeCategory === "men" ? " font-bold  text-black" : ""
                    }`}
                  onClick={() => handleTopNavCategoryClick("men")}
                >
                  MEN
                </li>
              </Link>
              <Link to="/women">
                <li
                  className={`cursor-pointer p-4 ${activeCategory === "women" ? "font-bold text-black" : ""
                    }`}
                  onClick={() => handleTopNavCategoryClick("women")}
                >
                  WOMEN
                </li>
              </Link>
              <Link to="/kids">
                <li
                  className={`cursor-pointer p-4 ${activeCategory === "kids" ? "font-bold text-black" : ""
                    }`}
                  onClick={() => handleTopNavCategoryClick("kids")}
                >
                  KIDS
                </li>
              </Link>
            </ul>
            <div className="p-5 m-5">
              <ul className="flex-col">
                {/* {renderBottomNavLinks()} */}

                <li className="cursor-pointer flex  w-24 h-10">
                  <input
                    type="text"
                    placeholder="Search here"
                    value={search}
                    className="p-1 w-20"
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <Link
                    to={`/searchresult/${search}`}
                    className={search.trim() === "" ? "disabled-link" : ""}
                  >
                    <FaSearch className="m-1" />
                  </Link>
                </li>
                <Link to="/filter">
                  <li className="p-3">
                    <FaFilter />
                  </li>
                </Link>
                <Link to="/wishlist">
                  <li className="cursor-pointer p-3">
                    <FaHeart />
                  </li>
                </Link>
                <Link to="/cart">
                  <li className="cursor-pointer p-3">
                    <FaShoppingCart />
                  </li>
                </Link>
                <Link to="/updateprofile">
                  <li className="cursor-pointer p-3">
                    <FaUser />
                  </li>
                </Link>
                <li className="hover p-3 font-bold">  <a
                href="https://play.google.com/store/apps/details?id=com.thesouledstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD APP
              </a></li>
                <Link to="/orderlist">
                  <li className="hover p-3 font-bold">ORDERLIST</li>
                </Link>
                <Link to="/login">
                  <li className="hover p-3 font-bold">LOGIN</li>
                </Link>
                <Link to="/signup">
                  <li className="hover p-3 font-bold">SIGNUP</li>
                </Link>
                <button 
                  onClick={() => {
                    dispatch(logout());
                    console.log("log");
                  }}
                  className="hover p-3 font-bold"
                >
                  Logout
                </button>
              </ul>
            </div>
          </>
        )}
      </div>

      <nav className="bg-red-600 p-6 sm:p-6 md:p-6 lg:p-2 text-white ">
        <div className=" flex justify-between m-2 container mx-auto">
          <div
            className={`lg:hidden ${isMenuOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          >
            <FaBars size={24} className="cursor-pointer" />
          </div>
          <ul className=" hover p-3 font-bold hidden space-x-4 px-44  sm:hidden md:hidden lg:flex">
            <Link to="/main">
              <li
                className={`cursor-pointer ${activeCategory === "men" ? "font-bold  text-black" : ""
                  }`}
                onClick={() => handleTopNavCategoryClick("men")}
              >
                MEN
              </li>
            </Link>
            <Link to="women">
              <li
                className={`cursor-pointer ${activeCategory === "women" ? "font-bold text-black" : ""
                  }`}
                onClick={() => handleTopNavCategoryClick("women")}
              >
                WOMEN
              </li>
            </Link>
            <Link to="/kids">
              <li
                className={`cursor-pointer ${activeCategory === "kids" ? "font-bold text-black" : ""
                  }`}
                onClick={() => handleTopNavCategoryClick("kids")}
              >
                KIDS
              </li>
            </Link>
          </ul>
          <ul className="hidden space-x-4 px-14 font-normal sm:hidden md:hidden lg:flex">
            <li className="hover p-3 font-bold">
              
              <a
                href="https://play.google.com/store/apps/details?id=com.thesouledstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOADAPP
              </a>
            </li>
            <Link to="/orderlist">
              <li className="hover p-3 font-bold">ORDERLIST</li>
            </Link>
            <Link to="/login">
              <li className="hover p-3 font-bold">LOGIN</li>
            </Link>
            <Link to="/signup">
              <li className="hover p-3 font-bold">SIGNUP</li>
            </Link>
            <button 
              onClick={() => {
                dispatch(logout());
                console.log("log");
              }}
              className="hover p-3 font-bold"
            >
              LOGOUT
            </button>
          </ul>
        </div>
      </nav>
      <div className="relative hidden sm:hidden md:hidden lg:block">
        <Link to="/">
          <img
            src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            alt="logo"
            className="w-32 h-20 m-5 absolute top-1/2  transform -translate-x-0 -translate-y-16 z-10"
          />
        </Link>
      </div>
      <nav className="shadow-md p-6 sm:p-6 md:p-6 lg:p-2 text-black ">
        <div className=" flex justify-between container mx-auto m-2 ">
          <ul className="hidden space-x-4 px-44 sm:hidden md:hidden lg:flex">
            {/* {renderBottomNavLinks()} */}
          </ul>
          <ul className="hidden space-x-4 px-14 sm:hidden md:hidden lg:flex">
            <li className="cursor-pointer flex">
              <input
                type="text"
                placeholder="Search here"
                value={search}
                className="p-1"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link
                to={`/searchresult/${search}`}
                className={search.trim() === "" ? "disabled-link" : ""}
              >
                <FaSearch className="m-1" />
              </Link>
            </li>
            <Link to="/filter">
              <li>
                <FaFilter />
              </li>
            </Link>

            <Link to="/wishlist">
              <li className="cursor-pointer">
                <FaHeart />
              </li>
            </Link>
            <Link to="/cart">
              <li className="cursor-pointer">
                <FaShoppingCart />
              </li>
            </Link>
            <Link to="/updateprofile">
              <li className="cursor-pointer">
                <FaUser />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* responsive navbar */}
      <div className="relative  sm:block md:block lg:hidden">
        <Link to="/">
          <img
            src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            alt="logo"
            className="w-32 h-20 m-5 absolute  left-1/2 transform -translate-x-1/2 -translate-y-32 z-10"
          />
        </Link>
      </div>
    </div>
  );
};
export default DualNavbar;
