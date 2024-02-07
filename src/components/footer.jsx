import React from "react";

const Footer = () => {
  const social = [
    { name: "GitHub", href: "https://github.com/Jarek-Dzwolak" },
    { name: "Instagram", href: "https://www.instagram.com/jarek.dzwolak/" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jaros%C5%82aw-dzwolak-4392701a9/",
    },
  ];
  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      <div className="container max-w-screen-xl mx-auto px-4 ">
        <div className="flex flex-col md:py-30 pt-12 pb-20 md:gap-24 gap-16">
          <div>
            <h3 className="md:text-display-xl text-display-md font-semibold pb-4">
              Masz propozycje współpracy?
            </h3>
            <p className="md:text-display-xl text-display-md font-normal hover:text-primary-100 ">
              Porozmawiajmy ↘
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-12 justify-center">
            <div>
              <a
                href="mailto:  jaroslawdzwolak@gmail.com"
                className="md:text-display-xs text-body-xl font-medium text-neutral-200 hover:text-primary-100 hover:underline">
                jaroslawdzwolak@gmail.com
              </a>
            </div>
            <div className=" flex flex-row justify-center gap-12">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="md:text-body-xl text-body-md font-normal text-neutral-200 hover:text-primary-100">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
