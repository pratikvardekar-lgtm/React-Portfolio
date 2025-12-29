import React from "react";
import AboutImg from "../assets/pratik.webp";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    /* 🌌 FULL WIDTH BACKGROUND */
    <section className="w-full bg-[#0f1425] py-24 px-6 md:px-12 lg:px-20">

      {/* 💎 CARD */}
      <div className="max-w-6xl mx-auto text-white bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-[#6c7cff]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#6c7cff] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <img
            src={AboutImg}
            alt="Profile"
            className="h-48 md:h-64 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />

          {/* Details */}
          <ul className="space-y-6">
            <li className="flex gap-4">
              <IoArrowForward size={26} className="text-[#9fb0ff] mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Frontend Developer
                </h3>
                <p className="text-gray-300">
                  Building responsive, modern and user-friendly interfaces.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={26} className="text-[#9fb0ff] mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Backend Developer
                </h3>
                <p className="text-gray-300">
                  Handling APIs, application logic and server-side workflows.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={26} className="text-[#9fb0ff] mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Database Developer
                </h3>
                <p className="text-gray-300">
                  Designing optimized, scalable and secure databases.
                </p>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default About;
