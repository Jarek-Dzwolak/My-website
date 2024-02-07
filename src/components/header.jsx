import React, { useState } from "react";

import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Praca", href: "#work" },
    { name: "Umiejętności", href: "#services" },
    { name: "O mnie", href: "#about" },
    { name: "Kontakt", href: "contact" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 shadow">
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center ">
          <div className="flex flex-row gap-8 items-center">
            <p className="text-body-lg font-bold text-neutral-900 pl-3">
              Jarek Dzwolak
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-6 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  className="text-body-sm font-medium text-neutral-700 duration-300 hover:bg-gray-50 hover:text-{color} rounded px-4">
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden flex flex-col pb-4 gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
