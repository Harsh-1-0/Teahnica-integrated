import React from "react";
function Navbar() {
  let Menu = (e) => {
    let list = document.querySelector("ul");
    if (e.name === "menu") {
      e.name = "close";
      list.classList.add("top-[80px]");
      list.classList.add("opacity-100");
    } else {
      e.name = "menu";
      list.classList.remove("top-[80px]");
      list.classList.remove("opacity-100");
    }
  };
  return (
    <div id="Landing">
      <div>
        <nav className="  p-5 m-5 shadow md:flex md:items-center md:justify-between font-[poppins]">
          <div class="flex justify-between items-center">
            <span className=" text-white md:text-3xl cursor-pointer text-2xl">
              T E C H <span className="text-[#27A5EF]">N I C A</span>
            </span>
            <span className="text-3xl cursor-pointer mx-2 md:hidden block">
              <ion-icon className="white" name="menu" onclick={Menu}></ion-icon>
            </span>
          </div>
          <div className="flex items-center about">
            <ul className="justify-between md:flex md:items-center   z-[-1] md:z-auto md:static absolute md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] trasition-all ease-in duration-500">
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#about"
                  className="text-2xl text-white hover:text-[#27A5EF]  duration-500 hover:text-3xl"
                >
                  About
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#tracks"
                  className="text-2xl text-white hover:text-[#27A5EF]  duration-500 hover:text-3xl"
                >
                  Tracks
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#Prizes"
                  className="text-2xl text-white hover:text-[#27A5EF] duration-500 hover:text-3xl"
                >
                  Prizes
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#contact"
                  className="text-2xl text-white hover:text-[#27A5EF] duration-500 hover:text-3xl"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
