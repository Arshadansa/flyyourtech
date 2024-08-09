import React from "react";

function Main() {
  return (
    <section className="max-w-screen-2xl mx-auto py-32  flex flex-col items-center justify-center  ">
      <div className=" text-center ">
        <p className=" text-white   font-display font-bold lg:text-9xl tracking-tighter">
          We’re a
        </p>
        <p className=" text-white leading-tight  font-display font-bold lg:text-9xl tracking-tighter ">
          innovative IT
        </p>
        <p className=" text-white  font-display font-bold lg:text-9xl tracking-tighter">
          Solutions
        </p>
      </div>
      <div className="mt-10">
        <button className="text-white hover:bg-black   bg-[#913bfe] px-8  rounded-md py-2 text-lg">
          GETSTARTEDNOW
        </button>
      </div>
    </section>
  );
}

export default Main;
