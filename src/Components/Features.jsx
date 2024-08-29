import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Style/Style.css";
import brand1 from "../Assest/Images/moyo.png";
import brand2 from "../Assest/Images/dongo.png";
import brand3 from "../Assest/Images/p6.png";
import brand4 from "../Assest/Images/Screenshot (456).png";
import brand5 from "../Assest/Images/Screenshot (458).png";
import brand6 from "../Assest/Images/Screenshot (464).png";
import brand7 from "../Assest/Images/Screenshot (460).png";
import { Link } from "react-router-dom";

function Freature() {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 264 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const brand2 =
    "https://cdn.dribbble.com/userupload/15714132/file/original-4bb558ff64b6d5d1b8af270333dcfb9f.png?resize=752x";
  const brand7 =
    "https://cdn.dribbble.com/userupload/14974069/file/original-5f07548753b7ce5917110b37962276b8.png?resize=752x";
  const brand5 =
    "https://cdn.dribbble.com/userupload/10620234/file/original-5daa1d3801d26c2a160b4b0be00ca594.png?resize=752x";
  const sliderImageUrl = [
    {
      url: brand1,
      title: "Moye ",
      des: "BLOCKCHAIN",
    },
    {
      url: brand2,
      title: "Gitrum",
      des: "Web Site",
    },
    {
      url: brand3,
      title: "StudentHq.in",
      des: "Web Site",
    },
    {
      url: brand4,
      title: "Nebula ai",
      des: "BLOCKCHAIN",
    },
    {
      url: brand6,
      title: "HodlSwap",
      des: "BLOCKCHAIN",
    },
    {
      url: brand7,
      title: "Frontier",
      des: "BLOCKCHAIN",
    },
    {
      url: brand5,
      title: "VR Meditation",
      des: "Meditation app",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-screen-2xl p-3 flex flex-col  gap-16 pt-32 lg:pt-44 mx-auto "
    >
      <div className="flex lg:pl-32 items-center lg:items-start lg:justify-normal justify-center gap-6 flex-col">
        <div className="text-center">
          <span className=" text-center text-white text-3xl font-display font-extrabold">
            Recent Projects
          </span>
        </div>
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }} // Initial state with opacity 0 (invisible)
          animate={{ x: inView ? 0 : "-20vw", opacity: inView ? 1 : 0 }} // Animate opacity to 1 when in view
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="flex flex-col text-xl font-display  tracking-tighter  font-medium text-[#727993]"
        >
          <span className=" leading-tight text-center lg:text-start ">
            Dramatically supply transparent backward deliverables before
          </span>
          <span className=" leading-tight text-center lg:text-start ">
            caward comp internal or "organic" sources.
          </span>
        </motion.div>
      </div>
      <div className="  ">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          // showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <>
                <div className=" flex items-center justify-center w-full h-fit flex-col">
                  <div
                    className=" lg:h-80  w-76   h-76 sm:h-96 sm:w-[450px] lg:w-[450px] hover:cursor-pointer  hover:bg-[#913bfe] flex  pl-8 pt-8 items-end  border-t-2 border-l-2 border-r-2 ml-4 justify-end  "
                    key={index}
                  >
                    <img
                      src={imageUrl.url}
                      className=" w-full object-fill  h-full "
                      alt="movie"
                    />
                  </div>
                  <div className="pl-4  w-[85%] mt-12">
                    <div className="text-[#b0b5d2] text-xl">
                      {imageUrl.title}
                    </div>
                    <div className="text-white text-3xl font-extrabold font-display ">
                      {imageUrl.des}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
      <div className="w-full flex items-center justify-center">
        <a href="/ourportfolio">
          <button className="text-white hover:bg-black z-20  bg-[#913bfe] px-8  rounded-md py-1 text-lg">
            View More Projects
          </button>
        </a>
      </div>
    </section>
  );
}

export default Freature;
