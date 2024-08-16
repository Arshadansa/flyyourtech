import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    stars: 5,
    text: `"Working with Fly Your Tech was an absolute pleasure. Their team is highly professional and responsive, ensuring that our project was completed on time and to the highest standards. They brought our vision to life with creative solutions and an innovative approach. We look forward to collaborating with them on future projects."`,
    image: "https://techy-xi.vercel.app/assets/img/testimonial/author-2.jpg",
    name: "Aakash Verma",
    title: "React Developer",
  },
  {
    stars: 5,
    text: `"Fly Your Tech's expertise in tech development is unmatched. From the initial consultation to the final delivery, the process was seamless. Their attention to detail and commitment to quality made all the difference in the success of our project. I highly recommend their services to anyone looking for a reliable and skilled tech partner."`,
    image: "https://techy-xi.vercel.app/assets/img/testimonial/author-1.jpg",
    name: "Neha Kapoor",
    title: "Software Developer",
  },
  {
    stars: 5,
    text: ` "The team at Fly Your Tech is exceptional. They understood our requirements perfectly and delivered a product that exceeded our expectations. Their ability to adapt to changing needs and provide innovative solutions was impressive. Communication was always clear, and they were always available to address any concerns."`,
    image: "https://techy-xi.vercel.app/assets/img/testimonial/author-3.jpg",
    name: " Rahul Deshmukh",
    title: "Android Developer",
  },
  {
    stars: 5,
    text: ` "Fly Your Tech made the entire development process a breeze. Their team is knowledgeable, experienced, and dedicated to delivering the best possible outcome. They kept us in the loop at every stage, and the final product was exactly what we wanted. Their professionalism and expertise are truly commendable."`,
    image: "https://techy-xi.vercel.app/assets/img/testimonial/author-3.jpg",
    name: " Priyanka Singh",
    title: "Backend Developer",
  },
  {
    stars: 5,
    text: ` "I had a great experience working with Fly Your Tech. Their team is incredibly talented and focused on delivering results that matter. They went above and beyond to ensure that our project was successful, providing valuable insights and suggestions along the way. The collaboration was smooth, and the end result was fantastic."`,
    image: "https://techy-xi.vercel.app/assets/img/testimonial/author-3.jpg",
    name: " Varun Gupta",
    title: "QA Developer",
  },
];

function TestimonialsCarousel() {
  return (
    <div className="pb-10 lg:h-96">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        showArrows={false}
        showStatus={false}
        className="w-[400px] md:w-[100%]"
      >
        {testimonials.map((testimonial, index) => (
          <div className="h-96" key={index}>
            <div className="text-white flex-col gap-5 items-center justify-center flex">
              <div className="flex gap-1 items-center">
                <span className="flex text-xl text-yellow-300">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <span className="text-xl">{testimonial.stars}</span>
              </div>
              <div className=" w-[90%] lg:w-[70%]">
                <span className="lg:text-2xl  text-sm font-display font-bold text-center">
                  {testimonial.text}
                </span>
              </div>
              <div className="flex mt-4">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    className="lg:h-32 lg:w-32 object-cover rounded-full"
                    alt={testimonial.name}
                  />
                </div>
                <div className="flex flex-col items-start text-xl justify-center ml-6">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TestimonialsCarousel;
