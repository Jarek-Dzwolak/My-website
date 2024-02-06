import React from "react";
import photome from "../img/Profilowe1.jpg";

const About = () => {
  const metrics = [
    { count: "15", label: "YEARS OF EXPERIENCE" },
    { count: "250+", label: "MOBILE APPS SHIPPED" },
    { count: "18", label: "DESIGN AWARDS" },
    { count: "23", label: "Bla Bla" },
  ];
  return (
    <div id="#about">
      <div className="container max-w-screen-xl mx-auto px-4 ">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12 items-center lg:py-28 md:pt-12 md:pb-28 pt-10 pb-20">
          <div className="lg:col-span-5 flex flex-row items-center gap-8">
            <div className="flex flex-col xl:pr-8">
              <h2 className="text-lg font-medium text-gray-700 md:pb-6 pb-4">
                O mnie
              </h2>
              <p className="font-normal text-gray-500 text-md">
                Jako programista i właściciel między innymi sklepu
                internetowego, lubie rozwijać biznes, oraz pasjonuje mnie
                programowanie. Świadomość skuteczności SEO i znaczenia
                responsywności stron jest dla mnie kluczowa. Nieustannie
                doskonalę swoje umiejętności, aby dostarczać rozwiązania o
                najwyższej jakości i funkcjonalności. Priorytetem dla mnie jest
                zadowolenie zarówno moje, jak i moich klientów. Zawsze jestem
                otwarty na nowe wyzwania i gotowy do współpracy w osiągnięciu
                wspólnych celów.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:grid lg:grid-cols-7 flex md:flex-row flex-col items-center md:gap-8 gap-12">
            <div className="lg:col-span-4 flex w-3/4 ">
              <img className="rounded" src={photome} />
            </div>
            <div className="lg:col-span-3 flex md:self-auto self-stretch grow flex-col xl:gap-16 lg:gap-8 gap-12 xl:pl-8">
              <div className="flex flex-col self-stretch gap-2 pb-4  border-neutral-400">
                <p className="font-normal text-gray-500 text-md">
                  Prywatnie bardzo lubię spędzać czas na rowerze, odkrywając
                  nowe trasy i czerpiąc radość z ruchu na świeżym powietrzu.
                  Loty dronem również są dla mnie fascynującym zajęciem,
                  pozwalającym spojrzeć na świat z zupełnie innej perspektywy.
                  Aktywność fizyczna to dla mnie nie tylko sposób na zachowanie
                  formy, ale także na wypoczynek i odskocznie od pracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
