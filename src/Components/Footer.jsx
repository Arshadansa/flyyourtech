import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      class=" relative flex overflow-hidden flex-col py-20 items-center "
    >
      <hr className="w-[80%]  border-[#1b224e] " />
      <div class="mx-auto w-full  pt-20 max-w-screen-xl">
        <div class="grid grid-cols-2 justify-self-center gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <motion.div
            initial={{ x: "-10vw", opacity: 0.5 }}
            animate={{ x: inView ? 0.5 : "-10vw", opacity: inView ? 1 : 0.5 }}
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
            className="justify-self-start"
          >
            <h2 className="mb-6 text-2xl tracking-tight font-display text-white dark:text-white">
              An influential creative agency. <br /> Get IT Solutions For Expert
              <br />
              Consultants
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4 flex items-center">
                <a
                  href="#"
                  className="tracking-tighter text-5xl font-display font-extrabold"
                >
                  Let’s Chat
                </a>
                <GoArrowUpRight size={70} />
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: "+10vw", opacity: 0.5 }}
            animate={{ y: inView ? 0 : "+10vw", opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
            className="justify-self-center"
          >
            <h2 class="mb-6 text-md text-white font-display  dark:text-white">
              About Us
            </h2>
            <ul class="text-white  dark:text-gray-400 font-medium">
              <li class="mb-4 hover:pl-2  ">
                <a href="#" class="">
                  Contact Us
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="">
                  Blog
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="">
                  Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="">
                  Refund
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: "+10vw", opacity: 0.5 }}
            animate={{ x: inView ? 0 : "+10vw", opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
            className="justify-self-end"
          >
            <h2 class="mb-6 text-xl font-display font-extrabold text-white  dark:text-white">
              FlyYourTech.@example.com
            </h2>
            <ul class="text-white dark:text-gray-400">
              <li class="mb-4">
                <span class=" text-xl">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div class="px-4    dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span class="text-lg tracking-tight text-white dark:text-gray-300 sm:text-center">
            <a href="https://flowbite.com/">Fly Your Tech©2024 </a>, All Rights
            Reserved.
          </span>
          <div class="flex mt-12 sm:justify-center  space-x-5 rtl:space-x-reverse">
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
      </div>
      <img
        src="https://techy-xi.vercel.app/assets/img/shape/line-round-4a.svg"
        className=" absolute  bottom-32 left-[440px]  "
        alt=""
      />
      <hr className=" w-full border-[#1b224e] absolute  bottom-44    " />
    </footer>
  );
}

export default Footer;
