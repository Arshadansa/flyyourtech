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
import brand4 from "../Assest/Images/p4.jpeg";
import brand5 from "../Assest/Images/p5.png";

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
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const sliderImageUrl = [
    {
      url: brand1,
      title: "Web Design",
      des: "Web Analytics",
    },
    {
      url: brand2,
      title: "Mobile info",
      des: "Upcoming phone",
    },
    {
      url: brand3,
      title: "Cyber secure",
      des: "Web Analytics",
    },
    {
      url: brand4,
      title: "Web Design",
      des: "Web Analytics",
    },
    {
      url: brand1,
      title: "Web Design",
      des: "Web Analytics",
    },
    {
      url: brand2,
      title: "Mobile info",
      des: "Upcoming phone",
    },
    {
      url: brand5,
      title: "Cyber secure",
      des: "Web Analytics",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-screen-2xl p-3 flex flex-col gap-20 pt-32 lg:pt-52 mx-auto "
    >
      <div className="flex lg:pl-32 items-center lg:items-start lg:justify-normal justify-center gap-6 flex-col">
        <div className="text-center">
          <span className=" text-center text-white text-3xl font-display font-extrabold">
            Featured Works
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
          <span className=" leading-tight text-center lg:text-start ">caward comp internal or "organic" sources.</span>
        </motion.div>
      </div>
      <div className="parent  ">
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
                <div
                  className=" lg:h-96 h-80 w-80 lg:w-[470px] hover:cursor-pointer  hover:bg-[#913bfe] flex  pl-8 pt-8 items-end  border-t-2 border-l-2 border-r-2 ml-4 justify-end  "
                  key={index}
                >
                  <img
                    src={imageUrl.url}
                    className="w-full h-full"
                    alt="movie"
                  />
                </div>
                <div className="pl-4 mt-12">
                  <div className="text-[#b0b5d2] text-xl">{imageUrl.title}</div>
                  <div className="text-white text-3xl font-extrabold font-display ">{imageUrl.des}</div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Freature;
