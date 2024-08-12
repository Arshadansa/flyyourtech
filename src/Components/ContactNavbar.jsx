import React from "react";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

function ContactNavbar() {
  return (
    <nav class=" z-20 relative ">
      <div class="max-w-screen-2xl lg:px-12 pt-6 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center uppercase text-2xl font-semibold whitespace-nowrap  text-white  ">
            Fly Your Tech
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
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
        <div class="hidden w-full lg:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className=" flex  items-center lg:border-r-2 pr-12">
              <a
                href="/"
                class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent 0 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="flex gap-2 items-center lg:border-r-2 pr-12">
              <IoTimeOutline size={40} className="text-white mt-2" />
              <div className="flex text-white flex-col">
                <span class="block py-2 px-3 md:p-0  rounded  ">
                  Time
                </span>
                <span className=" font-extrabold ">10AM - 11:30PM</span>
              </div>
            </li>
            <li className="flex gap-2 text-white items-center lg:border-r-2 pr-12">
              <IoLocationOutline size={40} className="text-white mt-2" />
              <div className="flex flex-col">
                <span class="block py-2 px-3 md:p-0 text-white rounded  ">
                  Location
                </span>
                <span className=" font-extrabold ">(M.P) , INDIA</span>
              </div>
            </li>
            <li className="flex gap-2 text-white items-center">
              <MdOutlinePhone size={40} className="text-white mt-2" />
              <div className="flex flex-col">
                <span class="block py-2 px-3 md:p-0 text-white rounded  ">
                  Time
                </span>
                <span className=" font-extrabold ">+91 747 706 6373</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ContactNavbar;
