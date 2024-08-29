import React from "react";
import ProjectGrid from "../Components/ProjectGrid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ContactNavbar from "../Components/ContactNavbar";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OurWork = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.0 }
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

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="bg-[#050c36] p-3">
      <ContactNavbar />
      <div className="text-white min-h-screen   p-5 md:p-10">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <motion.h1
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={headingVariants}
              className="text-sm sm:text-3xl md:text-4xl font-bold text-center"
            >
              OUR PORTFOLIO
            </motion.h1>

            <p className="text-white text-justify md:text-start text-sm sm:text-md md:text-lg mt-4">
              At Fly Your Tech, we are committed to delivering exceptional
              services across web development, app development, and cutting-edge
              technology solutions. Here’s a selection of our recent and notable
              projects:
            </p>
          </header>

          <div className="flex mb-6 items-center gap-1">
            <Link to="/">
              <span className="text-white hover:cursor-pointer hover:text-[#913bfe]">
                Home
              </span>
            </Link>
            <div className="mt-1">
              <IoIosArrowForward className="text-white" />
            </div>
            <span className="text-white">Our PortFolio</span>
          </div>

          <ProjectGrid />

          <p className="pt-12">
            Explore these links to see the quality and creativity we bring to
            each project. We look forward to collaborating with you to bring
            your vision to life!
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl h-32 w-full mx-auto border-[#242656] p-4 gap-5 border-t flex-wrap flex items-center justify-center lg:justify-between">
        <span className="text-lg tracking-tight text-white dark:text-gray-300 sm:text-center">
          <a href="https://flowbite.com/">Fly Your Tech©2024 </a>, All Rights
          Reserved.
        </span>
        <div className="flex lg:mt-6 mb-3 sm:justify-center lg:space-x-5 space-x-10 rtl:space-x-reverse">
          <a
            href="https://www.instagram.com/fly_your_tech/?igsh=MXBoZXcxYWJrbm4xZQ%3D%3D"
            className="text-white p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaInstagram className="cursor-pointer" size={22} />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="https://www.linkedin.com/groups/14502365"
            className="text-white p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaLinkedinIn className="cursor-pointer" size={22} />
            <span className="sr-only">LinkedIn page</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
