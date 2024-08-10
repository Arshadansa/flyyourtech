import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Creative from "../Components/Creative";
import About from "../Components/About";
import Footer from "../Components/Footer";
import OurServices from "../Components/OurServices";
import Freature from "../Components/Features";
import HowWork from "../Components/HowWork";

function Home() {
  return (
    <section className=" bg-[#050c36]">
      <Navbar />
      <Main />
      <Creative />
      <About />
      <OurServices />
      <Freature />
      <HowWork />
      <Footer />
    </section>
  );
}

export default Home;
