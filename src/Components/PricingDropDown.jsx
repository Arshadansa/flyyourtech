import React from "react";
import Pricing from "./Pricing";
import PricingMobileApp from "./PricingMobileApp";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function PricingDropDown() {
  const [openIndex, setOpenIndex] = useState(null);

  // Ref to manage scrolling for the entire component
  const componentRef = useRef(null);
  const sectionRefs = useRef({});

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      // Scroll the entire component into view
      if (componentRef.current) {
        componentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

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
    <div ref={componentRef} className="max-w-screen-xl mx-auto p-4 xl:p-0">
      <motion.h1
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-4xl font-bold text-center text-white mb-4"
      >
        Our packages
      </motion.h1>

      <div>
        {[
          {
            id: 1,
            title: "Need an ecommerce website?",
            content: <Pricing />,
          },
          {
            id: 2,
            title: "Need an App Solution?",
            content: <PricingMobileApp />,
          },
          {
            id: 3,
            title: "Need a Custom Solution?",
            content: <Pricing />,
          },
        ].map(({ id, title, content }) => (
          <div key={id} ref={(el) => (sectionRefs.current[id] = el)}>
            <h2 id={`accordion-heading-${id}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-white border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => handleToggle(id)}
                aria-expanded={openIndex === id}
                aria-controls={`accordion-body-${id}`}
              >
                <span className="text-xl">{title}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ease-in-out ${
                    openIndex === id ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-body-${id}`}
              className={`overflow-hidden transition-max-height duration-500 ease-out ${
                openIndex === id
                  ? "max-h-[4000px] sm:max-h-[1600px] md:max-h-[1800px] lg:max-h-[1400px]"
                  : "max-h-0"
              }`}
              aria-labelledby={`accordion-heading-${id}`}
            >
              {content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingDropDown;
