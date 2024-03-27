import React from "react";

import ProfileImg from "../assets/img/profile-crop.png"

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-[#e6f1ff] text-8xl mt-5">WELCOME</code>
        <br />
        <br />
        <br />
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-5xl mt-5">Chitipat Jirapong</code>
        
        

      </div>
      <code className="flex justify-center mt-10">
          <img className="h-64 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500" src={ProfileImg} alt="Bordered avatar" />
        </code>
      {/* <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
        <code>Check out my Projects !</code>
      </button> */}
    </div>
  );
}

export default Header;
