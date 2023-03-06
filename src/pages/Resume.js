import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid";

import HomepageSBImg from "../assets/img/homepage-sb-2.png"
import LineXSB from "../assets/img/linexsb.png"
import HomepageAtImg from "../assets/img/homepage-at-2.png"
import SoundAlign1 from "../assets/img/sound-alignment.png"
import SoundAlign2 from "../assets/img/sound-alignment-2.png"
import HomepageWaylarImg from "../assets/img/homepage-waylar-2.png"
import WithPartnerWaylar from "../assets/img/partner-waylar.png"
import WithPartnerWaylar2 from "../assets/img/partner-waylar-2.png"
import Embedded from "../assets/img/embedded.png"

const Resume = () => {
  return (
    <div
      id="Resume"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    > 
      <div>
        <div className="table">
          <ClipboardIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Naresuan University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Computer Science, Faculty of Science
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2014 - 2018
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work #3</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">IT Support</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            <a href="https://www.sabuyleasing.co.th/" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Sabuy Leasing Co., Ltd.</a> - Phitsanulok {" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2021 - Present</code>
            <br />
            <code className="text-base">
              <br />• Design and Develop API service connect to Webapp with LINE and LIFF (Backend using NodeJS, Frontend using React).
              <br />• Manage, edit and design the company's website with Wordpress.
              <br />• Providing troubleshooting services for equipment in our compamy more than 120 branches.
              
              
            </code>
            {/* <div className="grid grid-cols-4 gap-4 flex items-center mt-6"> */}
            <br />
            <br />

            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2">
                <img src={HomepageSBImg} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="homepage-Sabuy-leasing-website" />

                <img src={LineXSB} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="project-line-payment" />
            </div>
            {/* </div> */}
          </div>
          
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work #2</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            <a href="https://www.atprosound.com/" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">AT Pro Group Co., Ltd.</a> - Phitsanulok{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2020 - Jan 2021</code>
            <br />
            <code className="text-base">
              <br />• Manage, edit and design the company's website with Wordpress and Woocommerce.
              <br />• Write contents according to Google's SEO standards.
              <br />• Give customers advice on sound system equipment.
              <br />• Set up audio equipment for installation according Sound System Design.
            </code>
            <br />
            <br />
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2">
                <img src={HomepageAtImg} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="homepage-at-pro-sound-website" />

                <img src={SoundAlign1} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="sound-alignment" />

                <img src={SoundAlign2} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="sound-alignment-foh" />
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work #1</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Embedded Engineer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            <a href="https://www.waylar.net/" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Waylar Tect Co., Ltd.</a> - Bangkok{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2019 - Aug 2020</code>
            <br />
            <code className="text-base">
              <br />• Design and Develop circuits for customer requirements.
              <br />• Configuration device for connect vehicle with CANBUS communication.
              <br />• Translate articles, manuals, etc. to make it easier for users.
              <br />• Contact with foreign from both China and Europe who are partners for develop product together.
            </code>
            <br />
            <br />

            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2">

                <img src={HomepageWaylarImg} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="homepage-waylar-tech-website" />

                <img src={WithPartnerWaylar} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="partner-of-waylar" />

                <img src={WithPartnerWaylar2} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="installation-with-partner" />

                <img src={Embedded} className="h-full w-96 rounded-lg md:h-full md:w-72 p-1 hover:scale-125 transition-all duration-500 cursor-pointer" alt="design-and-solder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
