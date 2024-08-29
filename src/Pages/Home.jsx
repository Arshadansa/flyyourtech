import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Creative from "../Components/Creative";
import About from "../Components/About";
import Footer from "../Components/Footer";
import OurServices from "../Components/OurServices";
import Freature from "../Components/Features";
import HowWork from "../Components/HowWork";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";
import { Element } from "react-scroll";
import Pricing from "../Components/Pricing";
import PricingDropDown from "../Components/PricingDropDown";

function Home() {
  return (
    <section className="relative overflow-hidden bg-[#050c36]">
      <img
        src="https://techy-xi.vercel.app/assets/img/shape/line-1.svg"
        className="h-[550px] object-contain top-1 left-1  absolute z-30 "
        alt=""
      />
      <div className=" fixed mx-auto flex items-center justify-center w-full p-3 lg:p-0 lg:w-full z-50  bg-[#050c36] ">
        <Navbar />
      </div>

      <Element name="home" className="section">
        <Main />
        <Creative />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="OurServices" className="section">
        <OurServices />
      </Element>

      <Element name="Feature" className="section">
        <Freature />
        <HowWork />
        <PricingDropDown />
        <Testimonials />
      </Element>

      <Element name="contact" className="section">
        <ContactUs />
        <Footer />
      </Element>
    </section>
  );
}

export default Home;
