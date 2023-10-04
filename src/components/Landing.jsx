import React from "react";
function Landing() {
  return (
    <div className=" m-5 text-center ">
      <div className=" flex  justify-center items-center">
        <img
          src="./images/Logo.png"
          className="md:h-72 h-64"
          alt="logo of website"
        />
      </div>
      <h1 className="text-white text-6xl p-4">
        T E C H <span className="text-[#27A5EF]">N I C A</span>
      </h1>
      <div className="p-3">
        <h2 className="text-white text-3xl p-4">
          Initiate | <span className="text-[#27A5EF]">Innovate</span> | Inspire
        </h2>
      </div>
      <h3 className="text-white text-2xl">4th - 5th June 2023</h3>
      <div className="p-5 ">
        <button
          type="button"
          name="Register"
          className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default Landing;
