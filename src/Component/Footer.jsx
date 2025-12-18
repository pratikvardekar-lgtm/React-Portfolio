import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#1e293b] text-white px-8 md:px-20 py-14">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Let’s Connect</h1>
          <p className="text-sm md:text-lg text-gray-200 mt-3 max-w-md">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Right Section */}
        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex gap-4 items-center hover:text-gray-300 transition">
            <MdOutlineEmail size={24} />
            <a
              href="mailto:pratikvardekar@gmail.com"
              className="hover:underline"
            >
              pratikvardekar@gmail.com
            </a>
          </li>

          <li className="flex gap-4 items-center hover:text-gray-300 transition">
            <CiLinkedin size={26} />
            <a
              href="https://www.linkedin.com/in/pratikvardekar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/pratikvardekar
            </a>
          </li>

          <li className="flex gap-4 items-center hover:text-gray-300 transition">
            <FaGithub size={24} />
            <a
              href="https://github.com/pratikvardekar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/pratikvardekar
            </a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 my-10"></div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm text-gray-300">
        © {new Date().getFullYear()} Pratik Vardekar • Frontend Developer Portfolio
      </div>
    </footer>
  );
};

export default Footer;
