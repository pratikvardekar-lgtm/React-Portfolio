import React from "react";
import ProjectCard from "../Component/ProjectCard";

const Projects = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1429] via-[#11163a] to-[#0f1429] py-24">

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
           Proj<span className="text-[#6c7cff]">ects</span>
        </h1>
        <div className="w-24 h-1 bg-[#6c7cff] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

        <ProjectCard
          title="Portfolio Website"
          main="A fully responsive portfolio website built with smooth animations and reusable components."
          languages="React.js • Tailwind CSS"
          demo="https://github.com/pratikvardekar-lgtm/laravel-e-commerce-webiste"
          code="https://github.com/pratikvardekar-lgtm/laravel-e-commerce-webiste"
        />

        <ProjectCard
          title="E-Commerce Website"
          main="A fully responsive e-commerce web application with dynamic product data fetched using Axios and global state management implemented with React Context API."
          languages="React.js • Tailwind CSS • Context API • Axios"
          demo="https://your-ecommerce-live-link.com"
          code="https://github.com/pratikvardekar-lgtm/react-e-ccomerce-website"
        />

        <ProjectCard
          title="E-Commerce Platform"
          main="Complete e-commerce solution with authentication, admin dashboard and checkout system."
          languages="Laravel • MySQL • Bootstrap"
          demo="https://github.com/pratikvardekar-lgtm/laravel-e-commerce-webiste"
          code="https://github.com/pratikvardekar-lgtm/laravel-e-commerce-webiste"
        />

      </div>
    </section>
  );
};

export default Projects;
