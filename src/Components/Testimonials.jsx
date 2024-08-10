import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Testimonials() {
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
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const sliderImageUrl = [
    {
      start: "",
      name: "Hamina Hasan",
      degination: "",
      desc: "“Energistically architect parallel leadership through standardized results. Globally develop enabled leadership skills whereas multimedia based convergence. Professionally maintain best-of-breed markets and standardized leadership. Interactively embrace”",
      url: "",
    },
    {
      start: "",
      name: "",
      desc: "",
      url: "",
    },
    {
      start: "",
      name: "",
      desc: "",
      url: "",
    },
    {
      start: "",
      name: "",
      desc: "",
      url: "",
    },
    {
      start: "",
      name: "",
      desc: "",
      url: "",
    },
    {
      start: "",
      title: "",
      desc: "",
      url: "",
    },
    {
      start: "",
      title: "",
      desc: "",
      url: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 flex gap-32 flex-col items-center justify-center "
    >
      <div className="bg-[#913bfe] flex items-center justify-between px-12  w-[90%] h-80">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="flex text-5xl font-display  font-extrabold text-white items-center ">
            <CountUp className=" tracking-tighter  " end={276} /> k
          </span>
          <hr className="w-[20%]  border-black border-2 " />
          <span className="text-white text-2xl font-semibold font-display  tracking-wide ">
            Worldwide Students
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="flex text-5xl font-display  font-extrabold text-white items-center ">
            <CountUp className=" tracking-tighter  " end={23} /> +
          </span>
          <hr className="w-[20%]  border-black border-2 " />
          <span className="text-white text-2xl font-semibold font-display  tracking-wide ">
            Years Experience
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="flex text-5xl font-display  font-extrabold text-white items-center ">
            <CountUp className=" tracking-tighter  " end={735} /> +
          </span>
          <hr className="w-[20%]  border-black border-2 " />
          <span className="text-white text-2xl font-semibold font-display  tracking-wide ">
            Professional Courses
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="flex text-5xl font-display  font-extrabold text-white items-center ">
            <CountUp className=" tracking-tighter  " end={5} /> k
          </span>
          <hr className="w-[20%]  border-black border-2 " />
          <span className="text-white text-2xl font-semibold font-display  tracking-wide ">
            Beautiful Review
          </span>
        </div>
      </div>

      <motion.div
        initial={{ y: "+20vw", opacity: 0.5 }}
        animate={{ y: inView ? 0 : "+20vw", opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 20, damping: 10 }}
        className="w-[90%] flex gap-6 flex-col items-center justify-center"
      >
        <div>
          <span className="text-white text-4xl font-extrabold font-display">
            Testimonials
          </span>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <span className="text-[#979bb8] text-lg font-semibold">
            Dramatically supply transparent backward deliverables before
          </span>
          <span className="text-[#979bb8] text-lg font-semibold">
            caward comp internal or "organic" sources.
          </span>
        </div>
      </motion.div>

    

      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          
          <div class="hidden text-white duration-700 ease-in-out" data-carousel-item>
           
              <div  className="text-center" >
                <span>******</span>
              </div>
              <div className="text-center">
                <span class="text-xl font-bold text-center">
                  Energistically architect parallel leadership through
                  standardized results. Globally develop enabled
                  <br /> leadership skills whereas multimedia based convergence.
                  Professionally maintain best-of-breed markets
                  <br /> and standardized leadership. Interactively embrace
                </span>
              </div>
              <div class="flex mt-4 w-full items-center justify-center ">
                <div>
                  <img
                    src="https://techy-xi.vercel.app/assets/img/testimonial/author-3.jpg"
                    class="h-20 w-20 rounded-full"
                    alt="Hamina Hasan"
                  />
                </div>
                <div class="flex flex-col ml-2">
                  <span>Hamina Hasan</span>
                  <span>React Developer</span>
                </div>
              </div>
           
          </div>

          <div class="hidden  text-white duration-700 ease-in-out" data-carousel-item>
          
              <div className="text-center">
                <span>******</span>
              </div>
              <div className="text-center">
                <span class="text-xl font-bold text-center">
                  Energistically architect parallel leadership through
                  standardized results. Globally develop enabled
                  <br /> leadership skills whereas multimedia based convergence.
                  Professionally maintain best-of-breed markets
                  <br /> and standardized leadership. Interactively embrace
                </span>
              </div>
              <div class="flex mt-4 w-full items-center justify-center ">
                <div>
                  <img
                    src="https://techy-xi.vercel.app/assets/img/testimonial/author-1.jpg"
                    class="h-20 w-20 rounded-full"
                    alt="Hamina Hasan"
                  />
                </div>
                <div class="flex flex-col ml-2">
                  <span>Hamina Hasan</span>
                  <span>React Developer</span>
                </div>
              </div>
          
          </div>

          <div class="hidden text-white duration-700 ease-in-out" data-carousel-item>
          
              <div className="text-center">
                <span>******</span>
              </div>
              <div className="text-center">
                <span class="text-xl font-bold text-center">
                  Energistically architect parallel leadership through
                  standardized results. Globally develop enabled
                  <br /> leadership skills whereas multimedia based convergence.
                  Professionally maintain best-of-breed markets
                  <br /> and standardized leadership. Interactively embrace
                </span>
              </div>
              <div class="flex mt-4 w-full items-center justify-center ">
                <div>
                  <img
                    src="https://techy-xi.vercel.app/assets/img/testimonial/author-2.jpg"
                    class="h-12 w-12 rounded-full"
                    alt="Hamina Hasan"
                  />
                </div>
                <div class="flex flex-col ml-2">
                  <span>Hamina Hasan</span>
                  <span>React Developer</span>
                </div>
              </div>
          
          </div>

          <div class="hidden text-white duration-700 ease-in-out" data-carousel-item>
          
              <div className="text-center">
                <span>******</span>
              </div>
              <div className="text-center">
                <span class="text-xl font-bold text-center">
                  Energistically architect parallel leadership through
                  standardized results. Globally develop enabled
                  <br /> leadership skills whereas multimedia based convergence.
                  Professionally maintain best-of-breed markets
                  <br /> and standardized leadership. Interactively embrace
                </span>
              </div>
              <div class="flex mt-4 w-full items-center justify-center ">
                <div>
                  <img
                    src="https://techy-xi.vercel.app/assets/img/testimonial/author-2.jpg"
                    class="h-12 w-12 rounded-full"
                    alt="Hamina Hasan"
                  />
                </div>
                <div class="flex flex-col ml-2">
                  <span>Hamina Hasan</span>
                  <span>React Developer</span>
                </div>
              </div>
           
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          
              <div className="text-center"  >
                <span>******</span>
              </div>
              <div className="text-center">
                <span class="text-xl font-bold text-center">
                  Energistically architect parallel leadership through
                  standardized results. Globally develop enabled
                  <br /> leadership skills whereas multimedia based convergence.
                  Professionally maintain best-of-breed markets
                  <br /> and standardized leadership. Interactively embrace
                </span>
              </div>
              <div class="flex mt-4 w-full items-center justify-center ">
                <div>
                  <img
                    src="https://techy-xi.vercel.app/assets/img/testimonial/author-2.jpg"
                    class="h-12 w-12 rounded-full"
                    alt="Hamina Hasan"
                  />
                </div>
                <div class="flex flex-col ml-2">
                  <span>Hamina Hasan</span>
                  <span>React Developer</span>
                </div>
              </div>
         
          </div>

          
        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
