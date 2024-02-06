import React from "react";
import { Link } from "react-scroll";

const ContactButton = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      className="flex items-center text-display-xs font-medium text-gray-700 text-lg justify-center rounded-full bg-white font-semibold text-body-sm font-medium text-neutral-700 duration-300 hover:bg-gray-50 hover:text-{color} rounded px-4 py-2.5 lg:px-6 lg:py-4 lg:text-body-sm ">
      Kontakt
    </Link>
  );
};

export default ContactButton;
