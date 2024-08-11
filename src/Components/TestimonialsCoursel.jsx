import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa6";

function TestimonialsCarousel() {
  return (
    <div className="pb-10  lg:h-96 ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        showArrows={false} // Hide side arrows
        showStatus={false} // Hide status indicator (1 of 3)
        className="w-[300px] md:w-[100%]"
      >
        <div className="h-96 ]">
          <div className="text-white flex-col gap-5 items-center justify-center flex">
            <div className="flex gap-1 items-center">
              <span className="flex text-xl text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-xl">5</span>
            </div>
            <div>
              <span className="lg:text-2xl   text-sm font-display font-bold text-center">
                "Energistically architect parallel leadership through
                standardized results. Globally develop enabled <br /> leadership
                skills whereas multimedia based convergence. Professionally
                maintain best-of-breed markets <br /> and standardized
                leadership. Interactively embrace"
              </span>
            </div>
            <div className="flex mt-4">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://techy-xi.vercel.app/assets/img/testimonial/author-2.jpg"
                  className="lg:h-32 lg:w-32 object-cover rounded-full"
                  alt="Hamina Hasan"
                />
              </div>
              <div className="flex flex-col items-start text-xl justify-center ml-6">
                <span>Hamina Hasan</span>
                <span>React Developer</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-white flex-col gap-5 items-center justify-center flex">
            <div className="flex gap-1 items-center">
              <span className="flex text-xl text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-xl">5</span>
            </div>
            <div>
              <span className="lg:text-2xl  text-sm font-display font-bold text-center">
                "Energistically architect parallel leadership through
                standardized results. Globally develop enabled <br /> leadership
                skills whereas multimedia based convergence. Professionally
                maintain best-of-breed markets <br /> and standardized
                leadership. Interactively embrace"
              </span>
            </div>
            <div className="flex mt-4">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://techy-xi.vercel.app/assets/img/testimonial/author-1.jpg"
                  className="lg:h-32 lg:w-32 object-cover rounded-full"
                  alt="Hamina Hasan"
                />
              </div>
              <div className="flex flex-col items-start text-xl justify-center ml-6">
                <span>Hamina Hasan</span>
                <span>React Developer</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-white flex-col gap-5 items-center justify-center flex">
            <div className="flex gap-1 items-center">
              <span className="flex text-xl text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-xl">5</span>
            </div>
            <div>
              <span className="lg:text-2xl  text-sm font-display font-bold text-center">
                "Energistically architect parallel leadership through
                standardized results. Globally develop enabled <br /> leadership
                skills whereas multimedia based convergence. Professionally
                maintain best-of-breed markets <br /> and standardized
                leadership. Interactively embrace"
              </span>
            </div>
            <div className="flex mt-4">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://techy-xi.vercel.app/assets/img/testimonial/author-3.jpg"
                  className="lg:h-32 lg:w-32 object-cover rounded-full"
                  alt="Hamina Hasan"
                />
              </div>
              <div className="flex flex-col items-start text-xl justify-center ml-6">
                <span>Hamina Hasan</span>
                <span>React Developer</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default TestimonialsCarousel;
