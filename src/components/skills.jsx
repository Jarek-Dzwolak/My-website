import React from "react";

import Communciation from "../img/communication.png";
import Tools from "../img/tools.png";
import Technologic from "../img/technologic.png";

import DownloadButton from "../clickers/downloadbutton";

const Services = () => {
  return (
    <div id="#services">
      <div className="md:container md:mx-auto">
        <div className="lg:py-30 md:py-16 pt-5 pb-12">
          <div className="flex flex-col relative bg-secondary-100 lg:py-0 py-10">
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
                <h2 className="lg:text-display-lg text-display-md font-semibold pb-4">
                  Curriculum vitae
                </h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  Jeżeli chcesz pobrać moje cv kliknij w ten przycisk
                </p>
                <DownloadButton />
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-12 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white  px-8 py-10 p-8 shadow-xl">
                    <img
                      src={Communciation}
                      alt="UI"
                      className="w-28 md:w-28 pb-8"
                    />
                    <h4 className="text-display-xs font-medium text-gray-700 text-lg pb-4">
                      Umijętności miękkie
                    </h4>
                    <ul className=" list-disc font-normal text-gray-500 text-md">
                      <li>Zrozumiała komunikacja</li>
                      <li>Szybkie przyswajanie wiedzy</li>
                      <li>Świadomość celów biznesowych</li>
                      <li>Aktywne słuchanie</li>
                      <li>Angielski-B1</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className=" bg-white  px-8 py-10 p-8 shadow-xl  ">
                    <img
                      src={Technologic}
                      alt="Motion"
                      className="w-28 md:w-28 pb-8"
                    />

                    <h4 className=" border-box w-56 text-display-xs font-medium text-gray-700 text-lg pb-4">
                      Technologie
                    </h4>
                    <ul className=" list-disc font-normal text-gray-500 text-md">
                      <li>Java Script</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                  <div className="bg-white  px-8 py-10 p-8 shadow-xl ">
                    <img
                      src={Tools}
                      alt="Branding"
                      className="w-28 md:w-28 pb-8"
                    />
                    <h4 className="text-display-xs w-56 font-medium text-gray-700 text-lg pb-4">
                      Narzędzia
                    </h4>
                    <ul className=" list-disc font-normal text-gray-500 text-md">
                      <li>Figma</li>
                      <li>Trelo</li>
                      <li>Canva</li>
                      <li>AI</li>
                      <li>Heroku</li>
                      <li>GitHub</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
