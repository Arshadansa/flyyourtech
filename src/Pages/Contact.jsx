import React from "react";
import { motion } from "framer-motion";
import ContactNavbar from "../Components/ContactNavbar";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";

function Contact() {
  return (
    <section className="w-full lg:h-[100vh] h-[100%]  md:h-screen flex flex-col justify-between  relative bg-[#05103d] mx-auto">
      <ContactNavbar />
      <div className="max-w-screen-xl w-full p-3 lg:p-0 flex-col lg:flex-row lg:py-32   flex items-center  justify-between mx-auto">
        <img
          src="https://techy-xi.vercel.app/assets/img/page-title/img-01.png"
          className=" bottom-0 left-0 absolute z-0 "
          alt=""
        />
        <div className="lg:w-1/2   mb-12  ">
          <img
            src="https://techy-xi.vercel.app/assets/img/shape/star-2.svg"
            className=" absolute z-0  opacity-50  top-40 lg:left-[500px] "
            alt=""
          />
          <span className=" text-5xl font-extrabold text-white font-display">
            {" "}
            Contact
          </span>
          <img
            src="https://techy-xi.vercel.app/assets/img/shape/star-5b.svg"
            className=" absolute z-10 top-80 "
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <motion.div
            className="absolute right-20 bottom-10"
            animate={{
              y: [0, 40, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              src="https://techy-xi.vercel.app/assets/img/shape/line-round-1.svg"
              alt=""
            />
          </motion.div>{" "}
          <form class="w-full max-w-xl">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Your Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="JaneDoe"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Your Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="Doe@gmail.com"
                />
              </div>
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your message
            </label>
            <img
              src="https://techy-xi.vercel.app/assets/img/shape/star-5b.svg"
              className=" absolute z-10 top-32 "
              alt=""
            />
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-black  rounded-lg border border-gray-300  "
              placeholder="Leave a comment..."
            ></textarea>
            <button
              type="submit"
              className="text-white mt-12  ml-16 lg:ml-0  uppercase hover:bg-black z-20  bg-[#913bfe] px-12  font-bold rounded-md py-3 text-md"
            >
              Submit Now
            </button>
          </form>
        </div>
        <img
          src="https://techy-xi.vercel.app/assets/img/page-title/img-02.png"
          className=" top-0 right-0 absolute z-0 "
          alt=""
        />
      </div>
      <div class="max-w-screen-xl  w-full mx-auto  border-[#242656]  p-4 lg:p-0 gap-5 border-t  flex-wrap flex items-center justify-center lg:justify-between">
        <span class="text-lg tracking-tight text-white dark:text-gray-300 sm:text-center">
          <a href="https://flowbite.com/">Fly Your Tech©2024 </a>, All Rights
          Reserved.
        </span>
        <div class="flex lg:mt-6 mb-3 sm:justify-center  lg:space-x-5 space-x-10 rtl:space-x-reverse">
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaFacebookF className=" cursor-pointer" size={22} />

            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <IoLogoTwitter className=" cursor-pointer" size={22} />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaLinkedinIn className=" cursor-pointer" size={22} />

            <span className="sr-only">LinkedIn page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaYoutube className=" cursor-pointer" size={22} />

            <span className="sr-only">YouTube page</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
