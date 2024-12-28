import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/header/logo.png";
import Socials from "../components/Socials";
import MobileNav from "../components/MobileNav";

const nav = [
  { lable: "Home", link: "/" },
  { lable: "About", link: "/about" },
  { lable: "Portfolio", link: "/portfolio" },
  { lable: "Contact", link: "/contact" },
];
const navcoder = [
  { lable: "Home", link: "/" },
  { lable: "About", link: "/about" },
  { lable: "Skills", link: "/about" },
  { lable: "Services", link: "/about" },
  { lable: "Portfolio", link: "/portfolio" },
  { lable: "Contact", link: "/contact" },
];

const Header = () => {

  return (
    <>
      <header className="flex w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] fixed items-center">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link to={"/"} className="max-w-[200px]">
            <img src={Logo} alt="" className="w-24" />
          </Link>

          <nav className="hidden xl:flex gap-x-12 font-semibold">
            {window.location.pathname === "/ltcoder"
              ? navcoder.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="text-[#696c6d] transition hover:text-primary"
                  >
                    {item.lable}
                  </Link>
                ))
              : nav.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="text-[#696c6d] transition hover:text-primary"
                  >
                    {item.lable}
                  </Link>
                ))}
          </nav>
        </div>

        <Socials />

        <MobileNav />
      </header>
    </>
  );
};

export default Header;
