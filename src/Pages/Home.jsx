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

function Home() {
  return (
    <section className="relative bg-[#050c36]">
      <img
        src="https://techy-xi.vercel.app/assets/img/shape/line-1.svg"
        className="h-[550px] object-contain top-1 left-1  absolute z-30 "
        alt=""
      />
      <div className=" fixed  lg:w-full z-20  bg-[#050c36] ">
        <Navbar />
      </div>
      <Main />
      <Creative />
      <About />
      <OurServices />
      <Freature />
      <HowWork />
      <Testimonials />
      <Footer />
    </section>
  );
}

export default Home;
