import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/spaceX_logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        {/* mobile */}
        <div
          className={`flex flex-col w-full h-screen fixed top-0 bg-white justify-center
        items-center transition-all delay-500 ease-in-out z-[999999] ${
          nav ? "left-0" : "-left-[100%]"
        }`}
        >
          <div
            onClick={openNav}
            className="text-[3rem] absolute top-[3.5rem] right-[3.5rem] cursor-pointer
        transition-all delay-200 ease-in-out hover:text-[#ff4d30]"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="flex flex-col list-none text-[2.3rem] gap-12 text-center">
            <li className="relative">
              <Link
                onClick={openNav}
                className="no-underline text-black font-medium transition-all 
            delay-200 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
            after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
            after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
            hover:after:scale-x-100"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={openNav}
                className="no-underline text-black font-medium transition-all 
            delay-200 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
            after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
            after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
            hover:after:scale-x-100"
                to="/missions"
              >
                Missons
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={openNav}
                className="no-underline text-black font-medium transition-all 
            delay-200 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
            after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
            after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
            hover:after:scale-x-100"
                to="/history"
              >
                History
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={openNav}
                className="no-underline text-black font-medium transition-all 
            delay-200 after:absolute after:bottom-0 after:left-0 after:h-[4px] 
            after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
            after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
            hover:after:scale-x-100"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div
          className="w-full max-w-[133rem] h-auto flex justify-between items-center px-[2.7rem] py-8
      absolute top-0 right-0 left-0 bg-transparent z-[99999] mx-auto my-0"
        >
          <div className="w-[14.5rem] mb-5">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} className="w-full h-full" alt="logo-img" />
            </Link>
          </div>
          <ul className="hidden list-none gap-[2.1rem] lg:flex">
            <li className="relative">
              <Link
                className="text-[2rem] font-Rubik font-medium no-underline cursor-pointer
              transition-all delay-100 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
                  after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                  hover:after:scale-x-100"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              {" "}
              <Link
                className="text-[2rem] font-Rubik font-medium no-underline cursor-pointer
              transition-all delay-100 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
                  after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                  hover:after:scale-x-100"
                to="/missions"
              >
                Missions
              </Link>
            </li>
            <li className="relative">
              {" "}
              <Link
                className="text-[2rem] font-Rubik font-medium no-underline cursor-pointer
              transition-all delay-100 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                  after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
                  after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                  hover:after:scale-x-100"
                to="/history"
              >
                History
              </Link>
            </li>
            <li className="relative">
              {" "}
              <Link
                className="text-[2rem] font-Rubik font-medium no-underline cursor-pointer
              transition-all delay-100 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[4px] 
              after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ff4d30] after:transition-transform
              after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
              hover:after:scale-x-100"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* mobile */}
          <div
            className="text-[2.8rem] flex cursor-pointer transition-all delay-100 ease-in-out 
          hover:text-[#ff4d30] lg:hidden"
            onClick={openNav}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
