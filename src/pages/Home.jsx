import React from "react";
import avatarImg from "../assets/paper.png";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="text-black bg-[#0f1429] flex flex-col md:flex-row w-full justify-between items-center md:items-start p-6 md:p-20 mt-10">
        {/* Left Section */}
        <div className="md:w-2/4 text-center md:text-left mt-10">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-white">
            Hello, I am <span className="text-white">Pratik</span>
          </h1>

          <p className="text-sm md:text-2xl tracking-tight mt-6 md:mt-10 text-white">
            An information home page serves as the starting point of a website,
            providing an overview, navigation, and quick access to important
            content.
          </p>

          {/* Scroll to Footer */}
          <Link to="Contact">
            <button className="mt-6 md:mt-10 text-white text-sm md:text-lg py-2 px-6 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            className="w-64 md:w-[420px]"
            src={avatarImg}
            alt="avatar"/>
        </div>
      </div>

      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
    </>
  );
};

export default Home;
