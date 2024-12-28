import React from "react";

import { ImFacebook, ImInstagram, ImLinkedin } from "react-icons/im";
const socials = [
  { link: "https://www.facebook.com/TunItDL", icon: <ImFacebook /> },
  { link: "https://www.instagram.com/naat.eel/", icon: <ImInstagram /> },
  { link: "https://www.linkedin.com/in/lee-taan/", icon: <ImLinkedin /> },
];

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        {socials.map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
