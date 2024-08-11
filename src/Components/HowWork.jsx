import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";
import icon1 from "../Assest/Images/icon-9a.png";
import icon2 from "../Assest/Images/icon-10a (1).png";
import icon3 from "../Assest/Images/icon-10a.png";
import icon4 from "../Assest/Images/icon-11a.png";
import icon5 from "../Assest/Images/icon-12a.png";

function HowWork() {
  const cardData = [
    {
      title: "Create Account",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      url: icon1,
    },
    {
      title: "Read Rules",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      url: icon2,
    },
    {
      title: "Ask Problemt",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      url: icon3,
    },
  ];

  const cardData1 = [
    {
      title: "Get Solution",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      url: icon4,
    },
    {
      title: "Well Document",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      url: icon5,
    },

    // Add more objects here as needed
  ];

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

  const [hovertext, setHoverText] = useState(false);
  const [hovertextNext, setHoverTextNext] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="max-w-screen-xl py-20 p-3  lg:py-56 mx-auto"
    >
      <div className="flex items-center justify-center lg:items-start lg:justify-normal flex-wrap gap-6 flex-col">
        <div >
          <span className=" text-white text-3xl font-display font-extrabold">
            How It Works
          </span>
        </div>
        
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }}
          animate={{ x: inView ? 0 : "-20vw", opacity: inView ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="flex flex-col text-center lg:text-start text-xl font-display tracking-tighter font-medium text-[#727993]"
        >
          <span>
            Dramatically supply transparent backward deliverables before
          </span>
          <span>caward comp internal or "organic" sources.</span>
        </motion.div>

        <motion.div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: "+10vw", opacity: 0.5 }}
              animate={{ y: inView ? 0 : "+10vw", opacity: inView ? 1 : 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: index * 0.2, // Delay based on the index
              }}
              onMouseEnter={() => setHoverText(!hovertext)}
              onMouseLeave={() => setHoverText(!hovertext)}
              className={` relative gap-6  lg:w-96 p-6 lg:h-96 flex flex-col justify-center bg-[#05103d]  shadow-xl  group overflow-hidden`}
            >
              <div className="relative flex flex-col gap-8 z-10">
                <div className="border relative flex items-center justify-center overflow-hidden  border-[#2f3b65] mb-4 rounded-full h-32 w-32">
                  <div className="absolute inset-0 bg-[#913bfe] text-white left-full group-hover:left-0 transition-all duration-500 ease-in-out"></div>
                  <img className=" relative z-10 " src={card.url} alt="" />
                </div>
                <div>
                  <span className=" hover:text-[#913bfe] hover:cursor-pointer hover:underline underline-[#913bfe] text-white text-2xl font-display tracking-tight font-extrabold">
                    {card.title}
                  </span>
                </div>
              </div>
              <div className="flex mt- flex-col gap-8 relative z-10">
                <div className="flex flex-col font-display">
                  {card.description.map((desc, descIndex) => (
                    <span
                      key={descIndex}
                      className={`${
                        hovertext ? "text-white" : "text-[#686e8e]"
                      } text-lg`}
                    >
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:mt-8 grid-cols-1 relative  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData1.map((card, index) => (
            <>
              <motion.div
                key={index}
                initial={{ y: "+10vw", opacity: 0.5 }}
                animate={{ y: inView ? 0 : "+30vw", opacity: inView ? 1 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  damping: 10,
                  delay: 0.7 + index * 0.2, 
                }}
                onMouseEnter={() => setHoverTextNext(!hovertextNext)}
                onMouseLeave={() => setHoverTextNext(!hovertextNext)}
                className={` relative gap-6 lg:w-96 p-6 h-96 flex flex-col justify-center bg-[#05103d]  shadow-xl  group overflow-hidden`}
              >
                <div className="relative flex flex-col gap-8 z-10">
                  <div className="border relative flex items-center justify-center overflow-hidden  border-[#2f3b65] mb-4 rounded-full h-32 w-32">
                    <div className="absolute inset-0 bg-[#913bfe] text-white left-full group-hover:left-0 transition-all duration-500 ease-in-out"></div>

                    <img className=" relative z-10 " src={card.url} alt="" />
                  </div>
                  <div>
                    <span className="hover:text-[#913bfe] hover:cursor-pointer hover:underline text-white text-2xl font-display tracking-tight font-extrabold">
                      {card.title}
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 flex-col gap-8 relative z-10">
                  <div className="flex flex-col font-display">
                    {card.description.map((desc, descIndex) => (
                      <span
                        key={descIndex}
                        className={`${
                          hovertextNext ? "text-white" : "text-[#686e8e]"
                        } text-lg`}
                      >
                        {desc}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-20 bottom-10"
                animate={{
                  y: [0, 50, 0],
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
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWork;
