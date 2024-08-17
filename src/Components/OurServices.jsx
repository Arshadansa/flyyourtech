import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";

function OurServices() {
  const cardData = [
    {
      title: "Web Design",
      description: [
        "Delivering cutting-edge, transparent, and efficient web design solutions.",
        "We ensure that your web presence is not only visually appealing but also user-friendly and accessible.",
         " ",
      ],
      projects: "50 Projects Completed",
    },

    {
      title: "Web Development",
      description: [
        "We specialize in building robust, user-friendly websites that cater to your business needs. ",
        "Our development process is streamlined to produce frictionless deliverables, ensuring seamless user experiences.",
      ],
      projects: "50 Projects Completed",
    },
    {
      title: "UI/UX Design",
      description: [
        "Our UI/UX design services focus on creating intuitive and engaging user interfaces.",
        "We aim to provide designs that are both aesthetically pleasing and functionally effective, enhancing user satisfaction.",
      ],
      projects: "50 Projects Completed",
    },
  ];

  const cardData1 = [
    {
      title: "Web Security",
      description: [
        "Our team is dedicated to securing your web assets.",
        "We offer comprehensive web security services that protect your data and ensure the integrity of your online presence.",
      ],
      projects: "50 Projects Completed",
    },
    {
      title: "Digital Marketing",
      description: [
        "Boost your online presence with our digital marketing services.",
        "We employ innovative strategies to increase your visibility and drive engagement across all digital platforms.",
      ],
      projects: "50 Projects Completed",
    },
    {
      title: "Programming",
      description: [
        "We provide top-notch programming services, creating efficient and scalable solutions tailored to your specific requirements.",
        "Our team ensures that all deliverables are user-friendly and aligned with your business goals.",
      ],
      projects: "50 Projects Completed",
    },
    {
      title: "App Development",
      description: [
        "We create high-performing, feature-rich mobile applications that cater to a wide range of business needs.",
        "Our development process is focused on delivering apps that provide a seamless user experience.",
      ],
      projects: "100 Projects Completed",
    },
    {
      title: "Blockchain Development",
      description: [
        "Stay ahead with our blockchain development services.",
        "We offer secure and transparent solutions that leverage the latest in blockchain technology to enhance your business operations.",
      ],
      projects: "100 Projects Completed",
    },
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
      className="max-w-screen-xl  lg:p-0 lg:pt-56 mx-auto"
    >
      <div className="flex justify-center items-center xl:items-start xl:justify-normal gap-6 flex-col">
        <div>
          <span className=" text-white   text-3xl font-display font-extrabold">
            Our Services
          </span>
        </div>
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }}
          animate={{ x: inView ? 0 : "-20vw", opacity: inView ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="flex px-4 md:px-0 flex-col justify-center items-center lg:items-start lg:justify-normal text-xl font-display tracking-tighter font-medium text-[#727993]"
        >
          <span className=" text-center ">
            We offer a wide range of services tailored to meet your digital
            needs.
          </span>
          <span className=" text-center ">
            Each of our services is designed to deliver high-quality results
            that exceed expectations.
          </span>
        </motion.div>

        <motion.div className="grid mt-5 p-3  mx-auto xl:mx-0 lg:p-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
              className={` relative lg:w-96 gap-4 flex flex-col justify-between  p-6  lg:p-8 lg:h-92 border-[#50557b] border-2 group  `}
            >
              <div className="absolute inset-0 bg-[#913bfe] text-white bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out"></div>

              <div className="relative   z-20">
                <div className="w-full flex items-end justify-end">
                  <GoArrowUpRight
                    size={35}
                    className="text-white hover:cursor-pointer"
                  />
                </div>
                <div className="">
                  <IoCodeSlash
                    size={70}
                    className={` ${
                      hovertext ? "text-white" : "text-[#4183f3]"
                    }`}
                  />
                </div>
                <div>
                  <span className="uppercase hover:cursor-pointer hover:underline text-white text-xl lg:text-2xl font-display tracking-tight font-extrabold">
                    {card.title}
                  </span>
                </div>
              </div>
              <div className="flex   flex-col gap-8 relative z-10">
                <div className="flex  flex-col font-display">
                  {card.description.map((desc, descIndex) => (
                    <span
                      key={descIndex}
                      className={`${
                        hovertext ? "text-white" : "text-[#686e8e]"
                      } text-md lg:text-justify lg:text-lg`}
                    >
                      {desc}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="hover:underline text-lg lg:text-xl text-white uppercase">
                    {card.projects}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid  mt-8 xl:mx-0 p-3 lg:p-0 mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cardData1.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: "+20vw", opacity: 0.5 }}
              animate={{ y: inView ? 0 : "+20vw", opacity: inView ? 1 : 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.7 + index * 0.2, // Add an initial delay, then delay based on the index
              }}
              onMouseEnter={() => setHoverTextNext(!hovertextNext)}
              onMouseLeave={() => setHoverTextNext(!hovertextNext)}
              className={` relative flex flex-col justify-between lg:w-96 p-6 lg:h-92 border-[#50557b] border-2 group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[#913bfe] text-white bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out"></div>

              <div className="relative z-10">
                <div className="w-full flex items-end justify-end">
                  <GoArrowUpRight
                    size={35}
                    className="text-white hover:cursor-pointer"
                  />
                </div>
                <div className="mb-6">
                  <IoCodeSlash
                    size={70}
                    className={` ${
                      hovertextNext ? "text-white" : "text-[#4183f3]"
                    }`}
                  />
                </div>
                <div>
                  <span className="uppercase hover:cursor-pointer hover:underline text-white text-xl lg:text-2xl font-display tracking-tight font-extrabold">
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
                      } text-md lg:text-justify lg:text-lg`}
                    >
                      {desc}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="hover:underline text-lg lg:text-xl text-white uppercase">
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

export default OurServices;
