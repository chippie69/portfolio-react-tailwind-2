import React from "react";

const Footer = () => {
  return (
    <div id="Footer" className="static bottom-0">
      <div className="text-[#aaaaaa] text-sm mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code>
          © {new Date().getFullYear()} ❤️ Chitipat Jirapong. <br />
          Don't forget to update your copyright date on New Year's Day. 🤣
        </code>
      </div>
    </div>
  );
};

export default Footer;
