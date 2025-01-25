import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaGithub } from 'react-icons/fa'; // Added FaGithub
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain mr-2" />
          <div className="text-xl font-bold">
            <span className="text-[#915EFF]">Get In Touch</span> with Shahryar!
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6"> {/* Updated to 4 columns */}
          {/* Instagram */}
          <div className="flex items-center space-x-3">
            <FaInstagram className="w-6 h-6 text-[#915EFF]" />
            <div>
              <p className="text-sm font-bold">Instagram</p>
              <a
                href="https://www.instagram.com/its._shahryar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#915EFF]"
              >
                its._shahryar
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center space-x-3">
            <FaFacebook className="w-6 h-6 text-[#915EFF]" />
            <div>
              <p className="text-sm font-bold">Facebook</p>
              <a
                href="https://www.facebook.com/share/1Ao4ESuB99/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#915EFF]"
              >
                shahryar
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="w-6 h-6 text-[#915EFF]" />
            <div>
              <p className="text-sm font-bold">Email</p>
              <a
                href="mailto:shahryaramjadmos2@gmail.com"
                className="text-sm text-white hover:text-[#915EFF]"
              >
                shahryaramjadmos2@gmail.com
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-3">
            <FaGithub className="w-6 h-6 text-[#915EFF]" />
            <div>
              <p className="text-sm font-bold">GitHub</p>
              <a
                href="https://github.com/itshahryar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#915EFF]"
              >
                itshahryar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shahryar. All rights reserved.</p>
          <p className="mt-2">
            Where every pixel has a purpose and every line of code speaks volumes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
