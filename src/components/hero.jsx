import React from "react";
import Profilowe from "../img/Profilowe1.jpg";
import ContactButton from "../clickers/contactbutton";

function Hero() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 flex-col md:pt-10 pt-5 lg:pb-20 md:pb-16 pb-8 justify-between items-center text-center">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 flex flex-col items-center">
            <img
              className="rounded-full max-w-full h-auto w-32 md:w-40 lg:w-60 xl:w-80 m-3"
              src={Profilowe}
              alt="Jaroslaw Dzwolak photo"
            />

            <p className="font-medium text-gray-700 text-lg pb-4">
              Cześć, jestem Jarek Dzwolak
            </p>
            <h1 className="font-medium text-gray-700 text-lg pb-10">
              Tworzę cyfrowe produkty, kierując się celami biznesowymi
            </h1>
            <ContactButton />
          </div>
          <div className="lg:col-span-1"></div>
        </div>
        <div className="flex justify-center relative pb-1">
          <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-hero-line"></span>
          <div className="bg-inherit px-4 py-2 relative"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
