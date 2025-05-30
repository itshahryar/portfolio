import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { menu, close } from "../assets";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shahryar's Portfolio &nbsp;
            <span className="sm:block hidden"> | Code Sculptor</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Home link */}
          <li
            className={`${
              active === "Home" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          {/* Certifications link */}
          <li
                      className={`${
                        active === "Certifications" ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive("Certifications")}
          >
            <Link
              to="/certifications"
              className="text-[18px] font-medium cursor-pointer text-secondary hover:text-white"
            >
              Certifications
            </Link>
          </li>
                    {/* Education link */}
                    <li
                      className={`${
                        active === "Education" ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive("Education")}
          >
            <Link
              to="/education"
              className="text-[18px] font-medium cursor-pointer text-secondary hover:text-white"
            >
              Education
            </Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {/* Home link */}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Home" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Home");
                }}
              >
                <Link to="/">Home</Link>
              </li>
              {/* Certifications link */}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Certifications" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Certifications");
                }}
              >
                <Link to="/certifications">Certifications</Link>
              </li>
                            {/* Education link */}
                            <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "Education" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Education");
                }}
              >
                <Link to="/education">Education</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;