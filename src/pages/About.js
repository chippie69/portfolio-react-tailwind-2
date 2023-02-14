import React from "react";
import { IdentificationIcon } from "@heroicons/react/24/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
// const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
// const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/sqldb.png");
// const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/mongodb.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const HtmlLogo = require('../assets/logos/html.png')
const CSSLogo = require('../assets/logos/css3.png')
const BootstrapLogo = require('../assets/logos/bootstrap.png')
const CLogo = require('../assets/logos/c.png')

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            You can call me 'James' 😉. I am a person who likes to learn all the time. Learn new technologies in both software 👨‍💻 and hardware 💻, like camping 🏕️, hiking ⛰️, listening to music 🎼, watching series 📺.
          </code>
          <br />
          <br />
          <code>Skills:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CLogo}
                alt="C++ Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C++</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={HtmlLogo}
                alt="Html Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CSSLogo}
                alt="CSS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={BootstrapLogo}
                alt="Bootstrap Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bootstrap</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DockerLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Docker</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
