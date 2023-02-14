import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
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
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">IT Support</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Sabuy Leasing Co., Ltd. - Phitsanulok {" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2021 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Providing troubleshooting services for equipment in our company.
              <br />• Manage, edit and design the company's website with Wordpress.
              <br />• Design and Develop API service connect to Webapp and Line messager platform.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              AT Pro Group Co., Ltd. - Phitsanulok{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2020 - Jan 2021</code>
            <br />
            <code className="text-sm">
              <br />• Manage, edit and design the company's website with Wordpress and Woocommerce.
              <br />• Give customers advice on sound system equipment.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Embedded Engineer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Waylar Tect Co., Ltd. - Bangkok{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2019 - Aug 2020</code>
            <br />
            <code className="text-sm">
              <br />• Design and Develop circuits for customer requirements.
              <br />• Configuration device for connect vehicle with CANBUS communication.
              <br />• Translate articles, manuals, etc. to make it easier for users.
              <br />• Contact with foreign from both China and Europe who are partners for develop product together.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
