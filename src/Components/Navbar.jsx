import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlemenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="font-display  w-full lg:pt-3 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex gap-5 lg:gap-0 flex-wrap items-center justify-between mx-auto  lg:p-4">
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="flex hover:cursor-pointer items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center  font-bold text-2xl whitespace-nowrap text-white">
            FLY YOUR TECH
          </span>
        </Link>
        <div className="flex  md:hidden md:order-2  md:gap-4 ">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center borderp-2 w-10 h-10 justify-center text-sm text-white border rounded-full sm:hidden "
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="navbar-cta"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex  md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                onClick={handlemenu}
                className="block hover:cursor-pointer py-2 px-3 md:p-0 uppercase text-white hover:bg-gray-100 hover:text-black lg:hover:bg-[#050c36] lg:hover:text-white   rounded md:bg-transparent "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                onClick={handlemenu}
                className="block hover:cursor-pointer py-2 px-3 md:p-0 uppercase  rounded hover:bg-gray-100 hover:text-black lg:hover:bg-[#050c36] lg:hover:text-white md:hover:bg-transparent  text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="OurServices"
                smooth={true}
                duration={1000}
                onClick={handlemenu}
                className="block hover:cursor-pointer py-2 px-3 md:p-0 uppercase  rounded hover:bg-gray-100 hover:text-black lg:hover:bg-[#050c36] lg:hover:text-white md:hover:bg-transparent  text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="Feature"
                smooth={true}
                duration={1000}
                onClick={handlemenu}
                className="block hover:cursor-pointer py-2 px-3 md:p-0 uppercase  rounded hover:bg-gray-100 hover:text-black lg:hover:bg-[#050c36] lg:hover:text-white md:hover:bg-transparent  text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Feature 
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                onClick={handlemenu}
                className="block hover:cursor-pointer py-2 px-3 md:p-0 uppercase  rounded hover:bg-gray-100 hover:text-black lg:hover:bg-[#050c36] lg:hover:text-white md:hover:bg-transparent  text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
