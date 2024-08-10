import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";

function HowWork() {
  const cardData = [
    {
      title: "Create Account",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      projects: "324 Projects",
    },
    // Repeat similar objects for other cards
    {
      title: "Read Rules",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      projects: "324 Projects",
    },
    {
      title: "UI/UX Design",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      projects: "500 Projects",
    },
    // Add more objects here as needed
  ];

  const cardData1 = [
    {
      title: "Web Security",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      projects: "500 Projects",
    },
    {
      title: "Digital Marketing",
      description: [
        "Interactively provide access to world-",
        "class materials for catalysts.",
      ],
      projects: "500 Projects",
    },
    // {
    //   title: "Programming",
    //   description: [
    //     "Efficiently aggregate user-friendly",
    //     "models for frictionless deliverables",
    //     "collaboratively enhance backward.",
    //   ],
    //   projects: "500 Projects",
    // },
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
    <section ref={sectionRef} className="max-w-screen-xl py-56 mx-auto">
      <div className="flex gap-6 flex-col">
        <div>
          <span className=" text-white text-3xl font-display font-extrabold">
            How It Works
          </span>
        </div>
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }}
          animate={{ x: inView ? 0 : "-20vw", opacity: inView ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="flex flex-col text-xl font-display tracking-tighter font-medium text-[#727993]"
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
              className={` relative w-96 p-8 h-96 bg-[#05103d]  shadow-xl group overflow-hidden`}
            >
              <div className="absolute z-0   inset-0 bg-[#913bfe] text-white bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <IoCodeSlash
                    size={70}
                    className={` ${
                      hovertext ? "text-white" : "text-[#4183f3]"
                    }`}
                  />
                </div>
                <div className="mt-4">
                  <span className="uppercase hover:cursor-pointer hover:underline text-white text-2xl font-display tracking-tight font-extrabold">
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
                <div>
                  <span className="hover:underline text-xl text-white uppercase">
                    {card.projects}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid mt-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData1.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: "+30vw", opacity: 0.5 }}
              animate={{ y: inView ? 0 : "+30vw", opacity: inView ? 1 : 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.7 + index * 0.2, // Add an initial delay, then delay based on the index
              }}
              onMouseEnter={() => setHoverTextNext(!hovertextNext)}
              onMouseLeave={() => setHoverTextNext(!hovertextNext)}
              className={` relative w-96 p-8 h-92 bg-[#05103d]  shadow-xl  group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[#913bfe] text-white bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <IoCodeSlash
                    size={70}
                    className={` ${
                      hovertextNext ? "text-white" : "text-[#4183f3]"
                    }`}
                  />
                </div>
                <div>
                  <span className="uppercase hover:cursor-pointer hover:underline text-white text-2xl font-display tracking-tight font-extrabold">
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
                <div>
                  <span className="hover:underline text-xl text-white uppercase">
                    {card.projects}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowWork;
