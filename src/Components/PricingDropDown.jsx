import React, { useState, useEffect, useRef } from "react";
import Pricing from "./Pricing";
import PricingMobileApp from "./PricingMobileApp";
import { motion } from "framer-motion";

function PricingDropDown() {
  const [openIndex, setOpenIndex] = useState(1);

  // Refs to manage scrolling for the entire component and individual sections
  const sectionRefs = useRef({});

  // Scroll to the section that is opened
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      setTimeout(() => {
        if (sectionRefs.current[index]) {
          sectionRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500); // Adding a delay to ensure smooth transition
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

  // Scroll to the first section on component mount
  useEffect(() => {
    if (sectionRefs.current[openIndex]) {
      sectionRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []); // Empty dependency array to run only once after initial render

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
    <div ref={sectionRef} className="max-w-screen-xl mx-auto p-4 pt-24">
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
          // Uncomment if needed
          // {
          //   id: 3,
          //   title: "Need a Custom Solution?",
          //   content: <Pricing />,
          // },
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
                <span className="text-xl text-left">{title}</span>
                <span className="hover:underline"> {openIndex ? " Close Package" : "View Package"}</span>
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
