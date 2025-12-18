import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0f1425] to-[#0f172a] py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact <span className="text-[#6c7cff]">Form</span>
        </h2>
        <div className="w-24 h-1 bg-[#6c7cff] mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6 text-white">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>

          <div className="flex items-center gap-4">
            <MdOutlineEmail size={24} className="text-[#9fb0ff]" />
            <span className="text-gray-300">pratikvardekar@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <CiLinkedin size={24} className="text-[#9fb0ff]" />
            <a
              href="https://www.linkedin.com/in/pratikvardekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              linkedin.com/in/pratikvardekar
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub size={24} className="text-[#9fb0ff]" />
            <a
              href="https://github.com/pratikvardekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              github.com/pratikvardekar
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-[#0f1429] text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#6c7cff]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-[#0f1429] text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#6c7cff]"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-[#0f1429] text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#6c7cff]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#6c7cff] to-[#465697] text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
