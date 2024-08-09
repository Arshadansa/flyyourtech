import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Creative from "../Components/Creative";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Home() {
  return (
    <section className=" bg-[#050c36]">
      <Navbar />
      <Main />
      <Creative />
      <About />
      <Footer />
    </section>
  );
}

export default Home;
