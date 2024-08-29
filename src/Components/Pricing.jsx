import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Pricing = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
    <div
      ref={sectionRef}
      className="flex flex-col max-w-screen-2xl mx-auto justify-center items-center lg:min-h-screen p-6"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="text-4xl font-bold text-white mb-4"
      >
        Turning Your Ideas into Reality
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="text-lg text-white mb-12"
      >
        Choose the plan that's right for you and start bringing your vision to
        life.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Starter eCommerce Package */}
        <div className="bg-purple-700 hover:scale-105 transition-all ease-in-out duration-1000 hover:cursor-pointer text-white rounded-lg p-5 py-7 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Starter eCommerce Package
            </h2>
            <p className="text-3xl font-bold">₹5,999</p>
            <ul className="space-y-2 mb-6 mt-4">
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Custom-designed homepage
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Up to 5 product categories
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic shopping cart functionality
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Simple payment gateway integration
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Responsive design
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic contact form
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Social media links integration
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Inventory Management System (Basic)
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Fast Loading Speed Optimization
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> 1 Month of Free Support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic Training on Website
                Management
              </li>
            </ul>
          </div>
          <Link to={`/contact?plan=starter`} className="mt-4">
            <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold">
              Get Starter
            </button>
          </Link>
        </div>

        {/* Standard eCommerce Package */}
        <div className="bg-purple-700 hover:scale-105 transition-all ease-in-out duration-1000 hover:cursor-pointer text-white rounded-lg p-5 py-7 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Standard eCommerce Package
            </h2>
            <p className="text-3xl font-bold">₹9,999</p>
            <ul className="space-y-2 mb-6 mt-4">
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Everything in the Starter Package,
                plus:
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Up to 10 product categories
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Enhanced product search
                functionality
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced shopping cart
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Multiple payment gateway options
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic SEO setup
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Customer review and rating system
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> GST invoice generation
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic Dashboard for Sales and
                Inventory Tracking
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Google My Business Integration
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> 3 Months of Free Support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Basic Marketing Consultation
              </li>
            </ul>
          </div>
          <Link to={`/contact?plan=standard`} className="mt-4">
            <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold">
              Get Standard
            </button>
          </Link>
        </div>

        {/* Premium eCommerce Package */}
        <div className="bg-purple-700 hover:scale-105 transition-all ease-in-out duration-1000 hover:cursor-pointer text-white rounded-lg p-5 py-7 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Premium eCommerce Package
            </h2>
            <p className="text-3xl font-bold">₹14,999</p>
            <ul className="space-y-2 mb-6 mt-4">
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Everything in the Standard Package,
                plus:
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Blog integration for content
                marketing
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Up to 15 product categories
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced product filtering and
                sorting
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced Inventory Management
                System
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Dashboard for Sales, Inventory, and
                Customer Insights
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> User registration and login
                functionality
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Email newsletter integration
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Live chat integration
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Detailed analytics and reporting
                tools
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> WhatsApp integration for customer
                support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> 6 Months of Free Support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced Training on Analytics and
                Inventory Management
              </li>
            </ul>
          </div>
          <Link to={`/contact?plan=premium`} className="mt-4">
            <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold">
              Get Premium
            </button>
          </Link>
        </div>

        {/* Ultimate eCommerce Package */}
        <div className="bg-purple-700 hover:scale-105 transition-all ease-in-out duration-1000 hover:cursor-pointer text-white rounded-lg p-5 py-7 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Ultimate eCommerce Package
            </h2>
            <p className="text-3xl font-bold">₹19,999</p>
            <ul className="space-y-2 mb-6 mt-4">
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Everything in the Premium Package,
                plus:
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Up to 20 product categories
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Marketplace integration (Amazon,
                Flipkart, etc.)
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Customizable user dashboard
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced SEO and marketing tools
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced security features
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Detailed user activity tracking
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Multi-language support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Integration with CRM systems
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Customizable checkout process
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Priority support with a dedicated
                account manager
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> 1 Year of Free Support
              </li>
              <li className="flex items-center">
                <IoIosCheckmark size={32} /> Advanced Marketing and SEO Training
              </li>
            </ul>
          </div>
          <Link to={`/contact?plan=ultimate`} className="mt-4">
            <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold">
              Get Ultimate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
