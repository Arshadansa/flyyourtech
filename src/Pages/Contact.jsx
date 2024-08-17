import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactNavbar from "../Components/ContactNavbar";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  IoLocationOutline,
  IoLogoTwitter,
  IoTimeOutline,
} from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1fkckrv",
        "template_xgghux7",
        {
          from_name: form.name,
          to_name: "Abhay Gupta",
          from_email: form.email,
          to_email: "flyyourtech@gmail.com",
          message: form.message,
        },
        "RyALEi70XU6pe4wsL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="w-full h-full md:h-screen flex flex-col justify-between  relative bg-[#05103d] mx-auto">
      <ContactNavbar />
      <div className="max-w-screen-xl w-full p-3 px-12  flex-col lg:flex-row lg:py-12  flex items-center  justify-between mx-auto">
        <img
          src="https://techy-xi.vercel.app/assets/img/page-title/img-01.png"
          className=" bottom-0 left-0 absolute z-0 "
          alt=""
        />
        <div className="lg:w-1/2  lg:mb-12  ">
          <img
            src="https://techy-xi.vercel.app/assets/img/shape/star-2.svg"
            className=" absolute z-0  opacity-50  top-40 lg:left-[500px] "
            alt=""
          />
          <span className=" text-5xl font-extrabold text-white font-display">
            {" "}
            Contact
          </span>
          <img
            src="https://techy-xi.vercel.app/assets/img/shape/star-5b.svg"
            className=" absolute z-10 top-80 "
            alt=""
          />
        </div>
        <div className="lg:w-1/2 relative z-10">
          <ul className="flex flex-wrap  my-12 lg:hidden font-medium mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0 ">
            <li className="flex gap-2 items-center lg:border-r-2 lg:pr-12">
              <IoTimeOutline size={40} className="text-white mt-2" />
              <div className="flex text-white flex-col">
                <span className="block py-2 px-3 md:p-0 rounded">Time</span>
                <span className="font-extrabold">10AM - 11:30PM</span>
              </div>
            </li>
            <li className="flex gap-2 text-white items-center lg:border-r-2 lg:pr-12">
              <IoLocationOutline size={40} className="text-white mt-2" />
              <div className="flex flex-col">
                <span className="block py-2 px-3 md:p-0 text-white rounded">
                  Location
                </span>
                <span className="font-extrabold">(M.P), INDIA</span>
              </div>
            </li>
            <a href="tel:+917470391011" className="flex gap-2">
              <li className="flex gap-2 hover:cursor-pointer text-white items-center">
                <MdOutlinePhone
                  size={40}
                  className="text-white  hover:cursor-pointer mt-2"
                />
                <div className="flex flex-col">
                  <span className="block py-2 px-3 md:p-0 text-white rounded">
                    Phone
                  </span>
                  <span className="font-extrabold">+917470391011</span>
                </div>
              </li>
            </a>
          </ul>
          <motion.div
            className="absolute right-20 bottom-10"
            animate={{
              y: [0, 40, 0],
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
          </motion.div>{" "}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            class="w-full  relative z-10 max-w-xl"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Your Name
                </label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    !form.name ? "border-red-500" : "border-gray-300"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-first-name"
                  type="text"
                  placeholder="JaneDoe"
                />
                {!form.name && (
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Your Email
                </label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="Doe@gmail.com"
                />
              </div>
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your message
            </label>
            <img
              src="https://techy-xi.vercel.app/assets/img/shape/star-5b.svg"
              className=" absolute z-10 top-32 "
              alt=""
            />
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              class="block p-2.5 w-full text-sm text-black  rounded-lg border border-gray-300  "
              placeholder="Leave a comment..."
            ></textarea>
            <div className="  w-full flex items-center lg:justify-normal justify-center">
              <button
                type="submit"
                className="text-white mt-12     uppercase hover:bg-black z-20  bg-[#913bfe] px-12  font-bold rounded-md py-3 text-md"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
        <img
          src="https://techy-xi.vercel.app/assets/img/page-title/img-02.png"
          className=" top-0 right-0 absolute z-0 "
          alt=""
        />
      </div>
      <div class="max-w-screen-xl h-32 w-full mx-auto  border-[#242656]  p-4  gap-5 border-t  flex-wrap flex items-center justify-center lg:justify-between">
        <span class="text-lg tracking-tight text-white dark:text-gray-300 sm:text-center">
          <a href="https://flowbite.com/">Fly Your Tech©2024 </a>, All Rights
          Reserved.
        </span>
        <div class="flex lg:mt-6 mb-3 sm:justify-center  lg:space-x-5 space-x-10 rtl:space-x-reverse">
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaFacebookF className=" cursor-pointer" size={22} />

            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <IoLogoTwitter className=" cursor-pointer" size={22} />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaLinkedinIn className=" cursor-pointer" size={22} />

            <span className="sr-only">LinkedIn page</span>
          </a>
          <a
            href="#"
            class="text-white  p-3 hover:bg-[#913bfe] rounded-md border-[#1d254c] border-2 dark:hover:text-white"
          >
            <FaYoutube className=" cursor-pointer" size={22} />

            <span className="sr-only">YouTube page</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
